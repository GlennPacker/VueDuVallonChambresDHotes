import { ReactNode } from "react";
import { Button } from "react-bootstrap";

type props = {
  type?: 'primary' | 'secondary',
  classes?: string
  children: ReactNode;
}

export default function Btn({
  type = "primary",
  classes = '',
  children
}: props) {
  const buttonClasses = `${type === 'primary' ? 'text-white' : ''} ${classes}`
  return (
    <Button
      variant={type as string}
      className={buttonClasses}
    >
      {children}
    </Button>
  )
}
