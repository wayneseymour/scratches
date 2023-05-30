import { TestScheduler } from "rxjs/testing";
import { interval, map, take, toArray } from 'rxjs';
const getTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

class FooService {
  setup() {
    return {
      getUpdate$: () => {
        return interval(100).pipe(map((count) => `update-${count + 1}`));
      },
    };
  }
}
it('getUpdate$ emits updates every 100ms', async () => {
  const service = new FooService();
  const { getUpdate$ } = service.setup();
  expect(
    await getUpdate$()
      .pipe(
        take(3),
        toArray()
      ).toPromise()

  ).toEqual([
    'update-1',
    'update-2',
    'update-3',
  ]);
});
