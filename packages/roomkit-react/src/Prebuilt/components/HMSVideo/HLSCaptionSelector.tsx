import React from 'react';
import { ClosedCaptionIcon, OpenCaptionIcon } from '@100mslive/react-icons';
import { IconButton, Tooltip } from '../../../';

export function HLSCaptionSelector({ isEnabled, onClick }: { isEnabled: boolean; onClick: () => void }) {
  return (
    <Tooltip title="Subtitles/closed captions" side="top">
      <IconButton css={{ p: '$2' }} onClick={() => onClick()}>
        {isEnabled ? <ClosedCaptionIcon width="20" height="20px" /> : <OpenCaptionIcon width="20" height="20px" />}
      </IconButton>
    </Tooltip>
  );
}
