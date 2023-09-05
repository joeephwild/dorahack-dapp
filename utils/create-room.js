export const token = process.env.EXPO_PUBLIC_HUDDLE01_APIKEY;
// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  alert(roomId);
  return roomId;
};
