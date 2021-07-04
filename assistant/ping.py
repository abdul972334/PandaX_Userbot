from datetime import datetime


@asst_cmd("ping$")
@owner
async def _(event):
    start = datetime.now()
    end = datetime.now()
    ms = (end - start).microseconds / 1000
    await asst.send_message(
        event.chat_id,
        f"┏━《 **𝗣 𝗔 𝗡 𝗗 𝗔** 》━\n",
        f"┣➠  __Ping:__ `── {ms} milliseconds ──`\n",
        f"┗➠ 𝗣 𝗔 𝗡 𝗗 𝗔 𝗨𝗦𝗘𝗥𝗕𝗢𝗧 ",
    )
