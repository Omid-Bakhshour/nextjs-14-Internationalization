'use client';

import { useIntl } from 'react-intl';

export default function ExampleClientComponent({id}: {id:string}) {
  const { formatMessage } = useIntl();

  return <h3>{formatMessage({ id: id })}</h3>;
}