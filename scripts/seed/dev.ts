import db, { genId } from '../../src/modules/db';

const run =async () => {
  await db.submission.createMany({
    data: [
      {
        id: genId(),
        submittedAt: new Date(),
        data: {
          name: 'Harivams Sai',
          github: 'harivams-sai'
        }
      },
    ],
  });
};

// Auto-run when called directly
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}