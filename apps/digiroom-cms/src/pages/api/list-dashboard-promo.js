export default function handler(req, res) {
  const { token } = req.body;

  const offsetValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const responseSuccess = offsetValues.map((offset, index) => ({
    title: `Promo ${index + 1}`,
    slug: 'wow',
    startDate: new Date(new Date().getTime() + offset * 24 * 60 * 60 * 1000).toDateString(),
    endDate: new Date(new Date().getTime() + (offset + 2) * 24 * 60 * 60 * 1000).toDateString(), // Start date + 2 days
    category: 'Body & Paint',
    status: 'Publish',
    boolean: 'active',
  }));

  if (token !== null) {
    res.status(201).json(responseSuccess);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
