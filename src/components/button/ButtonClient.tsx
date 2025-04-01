'use client'
import { ReactNode } from "react";
import { Button } from "react-bootstrap";

type props = {
  type?: 'primary' | 'secondary',
  classes?: string
  children: ReactNode;
  href?: string;
  click?: () => void;
}

export default function BtnClient({
  type = "primary",
  classes = '',
  href,
  children,
  click
}: props) {
  const buttonClasses = `${type === 'primary' ? 'text-white' : ''} ${classes}`

  const clickHandler = () => {
    if (click) click();
    return undefined
  }

  const node = <Button
    variant={type as string}
    className={buttonClasses}
    onClick={() => clickHandler()}
  >
    {children}
  </Button>;

  const link = href ? (href.startsWith('/') ? href : `/${href}`) : null;

  return (
    <div className="pt-2">
      {href && <a href={link!}>{node}</a>}
      {!href && node}
    </div>
  )
}
