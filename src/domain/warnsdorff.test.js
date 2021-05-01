import warnsdorff from './warnsdorff';

test("Warnsdorff's rule", () => {
  const moves = warnsdorff(['b', 4]);
  expect(moves).toMatchSnapshot();
});
