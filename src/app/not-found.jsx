import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>ERROR</h1>
      <h2>NotFound</h2>
      <p>Pagina no encontrada</p>
      <Link href="/">
        <br />
        Volver
      </Link>
    </div>
  );
}
