import PackageProvider from './src/providers/PackageProvider';
import StoreProvider from './src/providers/StoreProvider';

const App = () => {
  const isClient = typeof window !== 'undefined';

  return (
    isClient ? (
      <StoreProvider>
        <PackageProvider />
      </StoreProvider>
    ) : (
      // Render the components without providers on the server-side
      <>
        {/* Components without providers */}
      </>
    )
  );
};

export default App;
