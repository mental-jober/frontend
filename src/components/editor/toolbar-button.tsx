import { ActionTooltip } from "./action-tooltip";

interface ToolbarButtonProps {
  tooltipLabel: string;
  className?: string;
  value?: string;
  children?: React.ReactNode;
}

export const ToolbarButton = ({
  tooltipLabel,
  children,
  ...props
}: ToolbarButtonProps) => (
  <ActionTooltip side="bottom" align="center" label={tooltipLabel}>
    <button {...props} />
  </ActionTooltip>
);

export const ToolbarUndoRedo = ({
  tooltipLabel,
  children,
  ...props
}: ToolbarButtonProps) => (
  <ActionTooltip side="bottom" align="center" label={tooltipLabel}>
    <button {...props}>{children}</button>
  </ActionTooltip>
);
