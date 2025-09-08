import './css/style.css';
import HeaderComponet from '@/components/HeaderComponet'
import FooterComponet from '@/components/FooterComponet'
import ModalComponent from '@/components/ModalComponent'
import { ProviderComponent } from './ProviderComponent';

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  title: '푸른마을 NextJS 메타태그 자동설정',
  description: '푸른마을 제작 NextJS',
  keywords: ["푸른마을", "NextJS", "React", "쇼핑몰", "웹퍼블리셔", "프론트앤드"],
  icons: {
    icon: "/images/logo192.png",
    shortcut: "/images/logo192.png",
    apple: "/images/logo192.png",
  },
  publisher: "문선종",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id='wrap'>
            <ProviderComponent>
              <HeaderComponet />
              <main id='main'>{children}</main>
              <FooterComponet />
              <ModalComponent />
            </ProviderComponent>
        </div>        
      </body>
    </html>
  )
}
