export const Logcard = ({log}) => {
    return (
        <div className="w-full py-3 px-4 flex">
                    <div className="w-full  text-base border py-2 px-4 rounded-lg flex">
                        <div className="w-1/4 flex justify-start items-center">{log?.action}</div>
                        <div className="w-1/4 flex justify-start items-center">{log?.user}</div>
                        <div className="w-1/4 flex justify-start items-center">{log?.target}</div>
                        <div className="w-1/4 flex justify-start items-center">{log?.createdAt}</div>
                    </div>
        </div>
    )

}