import { SquarePenIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import GoogleMapsIcon from '@/assets/google-map-icon.png';
import {
  Page,
  PageContent,
  PageDate,
  PageHeader,
  Typography,
} from '@/components/custom';
import StatusBadge from '@/components/src/StatusBadge/StatusBadge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useGetReport } from '@/hooks/report/useGetReport';
import { useUpdateReport } from '@/hooks/report/useUpdateReport';
import { ReportStatus } from '@/types';
import { showInMap } from '@/utils/showInMap';

import { ReportImages } from './ReportImages';

export const Report: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: report,
    isSuccess,
    refetch,
  } = useGetReport({ reportId: id || '' });
  const updateReport = useUpdateReport();

  const [isEditing, setIsEditing] = useState(false);
  const [comments, setComments] = useState(report?.comments || '');
  const [status, setStatus] = useState(report?.status || 'OPEN');

  const handleSave = () => {
    updateReport.mutate(
      {
        params: { reportId: id || '' },
        body: { comments },
      },
      {
        onSuccess: () => {
          void refetch();
          setIsEditing(false);
        },
      }
    );
  };

  const handleStatusChange = (value: string) => {
    const newStatus = value as ReportStatus;
    updateReport.mutate(
      {
        params: { reportId: id || '' },
        body: { status: newStatus },
      },
      {
        onSuccess: () => {
          void refetch();
          setStatus(newStatus);
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <Page>
        <PageDate />
        <PageHeader className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            Report {id}
            <StatusBadge status={status} />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Update Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  onValueChange={(value) => handleStatusChange(value)}
                >
                  <DropdownMenuRadioItem value="OPEN">
                    Open
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="RESOLVED">
                    Resolved
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="gap-2" onClick={() => showInMap(report.geomJson.coordinates)}>
              <Typography variant="p3">View on Google Maps</Typography>
              <img src={GoogleMapsIcon} alt="Google Maps" />
            </Button>
          </div>
        </PageHeader>

        <PageContent className="gap-4">
          <PageContent className="items-center">
            <ReportImages detections={report.detections} />
          </PageContent>

          <PageContent className="gap-2">
            <div className="flex items-center gap-4">
              <Typography variant="h2">Comments</Typography>
              <SquarePenIcon size={20} onClick={() => setIsEditing(true)} />
            </div>
            {isEditing ? (
              <div className="flex gap-2 items-center">
                <Input
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-[600px]"
                />
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <Typography variant="p2">{report.comments}</Typography>
            )}
          </PageContent>
        </PageContent>
      </Page>
    );
  }

  return null;
};
