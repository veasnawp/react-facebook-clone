import { avatar } from "../icons";


const dataList = [
  {
    label: "Veasna Meta", icon: avatar, link: "#username"
  },
  {
    label: "Friends", icon: "/src/assets/facebook-icon-png-01.png", link: "#friends"
  },
  {
    label: "Memories", icon: avatar, link: "#memories"
  },
  {
    label: "Saved", icon: avatar, link: "#saved"
  },
  {
    label: "Group", icon: avatar, link: "#groups"
  },
  {
    label: "Marketplace", icon: avatar, link: "#marketplace"
  },
  // {
  //   label: "Feeds", icon: avatar, link: "#feeds"
  // },
  // {
  //   label: "Events", icon: avatar, link: "#events"
  // },
  // {
  //   label: "Ads Manager", icon: avatar, link: "#ads-manager"
  // },
];

export const LeftSidebar = () => {
  return (
    <>
    <div id="left-sidebar" className='sticky overflow-hidden box-border top-[var(--header-height)] max-w-[360px] min-w-[280px] basis-[360px] shrink-[9999] hidden-mobile'>
      <div className=''>
        <div className='relative-flex-col'>
          <div className='mt-4'>
            <ul>
              {
                dataList.map((data, i) => {
                  const bgPosition = i == 2
                    ? "bg-[center_-444px]"
                    : i == 3
                    ? "bg-[center_-186px]"
                    : i == 4
                    ? "bg-[center_-36px]"
                    : i == 5
                    ? "bg-[center_-406px]"
                    : "bg-[center_-296px]"

                  return (
                    <li key={data.label}>
                      <div className='px-2'>
                        <div className='hover_menu_section'>
                          <a href={data.link}>
                          <div className='px-2 flex items-center text-[15px]'>
                            <div className='my-2 mr-2'>
                            {
                              i === 0
                              ? <img className='image_circle w-9 h-9' src={data.icon} alt={data.label} />
                              : <i className={`bg-position bg-[url('/src/assets/facebook-icon-png-01.png')] ${bgPosition} w-9 h-9`}/>
                            }
                            </div>
                            <div className='grow font-semibold'><div>{data.label}</div></div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='relative-flex-col'>
          <div className='mt-4'>
            <div className='group flex justify-between px-4 text-[15px] font-semibold text-[var(--secondary-text)]'>
              <div>
                <span>{`Your shortcuts`}</span>
              </div>
              <div className='text-[var(--blue-link)] opacity-0 group-hover:opacity-100'>
                <a href="#edit-shortcuts">
                  <span>{`Edit`}</span>
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <ul>
                {
                  [...Array(3).keys()].map((_) => dataList[0])
                  .map((item, i) => {

                    return (
                      <li key={item.label.concat(" ", String(i + 1))}>
                        <div className='px-2'>
                          <div className='hover_menu_section'>
                            <a href={item.link}>
                            <div className='px-2 flex items-center text-[15px]'>
                              <div className='my-2 mr-2'>
                                <img className='image_circle w-9 h-9' src={item.icon} alt={item.label} />
                              </div>
                              <div className='grow font-semibold'><div>{item.label.concat(" ", String(i + 1))}</div></div>
                            </div>
                            </a>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
