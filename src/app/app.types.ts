export interface DefaultComponentProps {
  children?: React.ReactNode
}
export interface LinkWithBadgeProps extends DefaultComponentProps {
  badge?: string
}

export interface ExpansionPanelProps extends DefaultComponentProps {
  icon?: string
  title?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}
