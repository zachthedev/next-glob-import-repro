const items = import.meta.glob('./items/*.ts', { eager: true, import: 'item' });

export default function Page() {
  return <pre>{JSON.stringify(items)}</pre>;
}
