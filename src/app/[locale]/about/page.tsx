import ServerIntlProvider from '@/components/ServerIntlProvider';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import Link from 'next/link';
import getIntl from '../intl';
import { localePath } from '@/libs/locale';


async function About({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getIntl(locale);

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
       <h1>{locale}</h1>

      <main className={'main'}>
        <h1>{intl.formatMessage({ id: 'header' })}</h1>
        <ExampleClientComponent id='about' />
        <Link href={localePath('/',locale)} lang={locale} >{intl.formatMessage({ id: 'page2' })}</Link>
        <LanguageChanger />
      </main>
    </ServerIntlProvider>
  );
}

export default About;