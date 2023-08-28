export default function handler(req, res) {
  const { search, sortDirection, currentPage, startIndex, endIndex, id, filterData } = req.query;
  const { token } = req.body;

  const offsetValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  let responseSuccess = offsetValues.map((offset, index) => ({
    id: index + 1,
    title: `Promo ${index + 1}`,
    slug: 'wow',
    startDate: new Date(new Date().getTime() + offset * 24 * 60 * 60 * 1000).toDateString(),
    endDate: new Date(new Date().getTime() + (offset + 2) * 24 * 60 * 60 * 1000).toDateString(),
    category: 'Body & Paint',
    status: 'Published',
    boolean: 'active',
  }));

  if (search !== null && search !== undefined) {
    responseSuccess = responseSuccess.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filterData !== null && filterData !== undefined) {
    responseSuccess = responseSuccess.filter((item) => {
      return filterData.every((filter) => {
        const { column, key } = filter;
        return item[column].toLowerCase().includes(key.toLowerCase());
      });
    });
  }

  if (sortDirection === 'asc' || sortDirection === 'desc') {
    responseSuccess.sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  if (currentPage && startIndex && endIndex) {
    const startIdx = parseInt(startIndex);
    const endIdx = parseInt(endIndex);
    responseSuccess = responseSuccess.slice(startIdx, endIdx);
  }

  if (token !== null) {
    const responseData = {
      total: offsetValues.length,
      data: responseSuccess,
    };

    if (req.method === 'GET') {
      res.status(200).json(responseData);
    } else if (req.method === 'DELETE') {
      const indexToDelete = responseSuccess.findIndex((item) => item.id === parseInt(id, 10));
      if (indexToDelete !== -1) {
        responseSuccess.splice(indexToDelete, 1);
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
