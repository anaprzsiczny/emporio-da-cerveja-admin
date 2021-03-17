import React from 'react';

export interface PageTitleProps {
  pagina: string
}

const PageTitle = (props: PageTitleProps) => {
  return(
    <div data-testid="title">
      <h1>{props.pagina}</h1>
    </div>
  )
}

export default PageTitle