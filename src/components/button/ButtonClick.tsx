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

export default function BtnClick({
  type = "primary",
  classes = '',
  children,
  click
}: props) {
  return (
    <div className="pt-2">
      <Button
        variant={type as string}
        className={`${type === 'primary' ? 'text-white' : ''} ${classes}`}
        onClick={() => click && click()}
      >
        {children}
      </Button>
    </div>
  )
}
