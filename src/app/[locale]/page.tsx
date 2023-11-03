import getIntl from './intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import Link from 'next/link';
import { localePath } from '@/libs/locale';


async function Home({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getIntl(locale);

  return (

    
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
       <h1>{locale}</h1>

      <main className={'main'}>
        <h1>{intl.formatMessage({ id: 'header' })}</h1>
        <ExampleClientComponent id='greeting' />
        <Link href={localePath('/about',locale)} >{intl.formatMessage({ id: 'page2' })}</Link>
        <LanguageChanger />
      </main>
    </ServerIntlProvider>
  );
}

export default Home;