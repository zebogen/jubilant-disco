export default function createNotification({ cache, slug, text }) {
  cache.writeData({
    data: {
      notification: {
        show: true,
        slug,
        text,
        __typename: 'Notification',
      },
    },
  });
}
