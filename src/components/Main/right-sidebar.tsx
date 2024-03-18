import { IconsComponent, avatar } from "../icons/index"

export const RightSidebar = () => {
  return (
    <>
    <div id="right-sidebar" className='sticky overflow-hidden box-border top-[var(--header-height)] max-w-[360px] min-w-[280px] basis-[360px] shrink-[9999] only-mobile'>
      <div>
        <div className="">
          <div className=''>
            <div className='relative-flex-col text-[#65676B]'>
              <div>
                <div className="relative-flex-col pt-5">
                  <div className="text-base font-semibold">Your Pages and profiles</div>
                  <div className="py-2">
                    <div className="hover_menu_section">
                      <a href="#">
                        <div className="px-2 flex items-center text-[15px]">
                          <div className='my-2 mr-2'>
                            <img className='image_circle w-8 h-8' src={avatar} alt={"Veasna WP"} />
                          </div>
                          <div className='grow font-semibold text-[#050505]'><div>{`Veasna WP`}</div></div>
                        </div>
                      </a>
                    </div>
                    <div className="pl-4 pr-2">
                    <div className="hover_menu_section">
                      <a href="#">
                        <div className="px-2 flex items-center text-[15px]">
                          <div className='my-2 mr-2'>
                            <IconsComponent.userOutline color="#65676B" />
                          </div>
                          <div className='grow font-semibold'><div>{`Switch to Page`}</div></div>
                        </div>
                      </a>
                    </div>
                    <div className="hover_menu_section">
                      <a href="#">
                        <div className="px-2 flex items-center text-[15px]">
                          <div className='my-2 mr-2'>
                            <IconsComponent.announce color="#65676B" />
                          </div>
                          <div className='grow font-semibold'><div>{`Create promotion`}</div></div>
                        </div>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='relative-flex-col'>
              <div className='mt-4'>
                <div className='group flex justify-between px-4 text-[15px] font-semibold text-[var(--secondary-text)]'>
                  <div className="flex items-center justify-center">
                    <span>{`Contacts`}</span>
                  </div>
                  <div className=''>
                    <div className="relative-flex-row">
                      <div className="flex items-center justify-center w-9 h-9 hover:rounded-full hover:bg-[rgba(158,158,158,0.2)] cursor-pointer mr-2">
                        {IconsComponent.search({width: 16, height: 16,})}
                      </div>
                      <div className="flex items-center justify-center w-9 h-9 hover:rounded-full hover:bg-[rgba(158,158,158,0.2)] cursor-pointer">
                        {IconsComponent.threeDots({width: 24, height: 24})}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-2'>
                  <ul className="opacity-[0.4]">
                    {
                      [...Array(10).keys()].map((_) => ({
                        label: "Veasna Meta", icon: avatar, link: "#username"
                      }))
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
      </div>
    </div>
    </>
  )
}
