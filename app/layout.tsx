
import '../globals.css';
import CustomCursor from '../components/CustomCursor';
export const metadata={
  title:'Apdsworks',
  openGraph:{images:['/images/og-apdsworks.png']},
  icons:{icon:'/favicon.png'}
};
export default function RootLayout({children}){
  return(<html lang="id"><body><CustomCursor/>{children}</body></html>);
}
