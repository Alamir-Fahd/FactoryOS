const samplePayload = {
  factory_data: {
    line: 'A1',
    monthlyRevenue: 125000,
    utilizationRate: 0.84,
  },
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '32px',
      }}
    >
      <section
        style={{
          width: 'min(760px, 100%)',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 24px 60px rgba(16, 33, 58, 0.12)',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#54657d',
            fontSize: '14px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          FactoryOS
        </p>
        <h1 style={{ margin: '12px 0 16px', fontSize: '40px', lineHeight: 1.1 }}>
          FastAPI is now wired into the project.
        </h1>
        <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, color: '#30445f' }}>
          Use the Next.js proxy route at <code>/api/forecast</code> to reach the AI service. 
          To view the interactive Swagger UI, navigate to the <code>/docs</code> endpoint on your backend port.
        </p>
        <pre
          style={{
            marginTop: '24px',
            padding: '20px',
            borderRadius: '16px',
            overflowX: 'auto',
            background: '#10213a',
            color: '#e8f0ff',
            fontSize: '14px',
          }}
        >
          {JSON.stringify(samplePayload, null, 2)}
        </pre>
      </section>
    </main>
  );
}
