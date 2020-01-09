import Link from 'next/link';
import { useRouter } from 'next/router';

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <a className="back-link" onClick={() => router.back()}>Back</a>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <style jsx>{`
        .back-link {
          margin-right: 15px;
        }
        .back-link:hover{
          cursor:pointer;
        }
      `}</style>
    </div>
  )
}


export default Header;