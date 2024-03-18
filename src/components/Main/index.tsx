import MainFeed from './mainFeed'
import { LeftSidebar } from './left-sidebar'
import { RightSidebar } from './right-sidebar'
import { useMediaQuery } from '../../assets/hooks/use-media-query'

export const Main = () => {

  const mQuery = useMediaQuery();
  return (
    <div id="main" className='default_container box-border relative'>
      <div className='relative-flex-col'>
        <div className='relative-flex-col top-[var(--header-height)] min-h-[calc(100vh-var(--header-height))]'>
        <div className={'relative-flex-col'.concat(
          mQuery > 1920 ? " items-center justify-center": ""
        )}>
          <div className={'relative-flex-row flex-nowrap basis-0 box-border shrink grow items-start justify-between z-0'.concat(
            mQuery > 1920 ? " max-w-[1464px]":""
          )}>
            <LeftSidebar />
            <MainFeed />
            <RightSidebar />
            {/* <div className="flex w-[600px] bg-neutral-50 mx-auto my-0">
              <aside className="flex-[0_0_33.3333%] bg-[gray]">
                <div className="sticky bg-[yellow] h-[250px] top-0">
                  widget
                </div>
              </aside>
              <div className="flex-[0_0_66.6666%] h-[1000px]">Main</div>

              <aside className="flex-[0_0_33.3333%] bg-[gray]">
                <div className="sticky bg-[yellow] h-[250px] top-0">
                  widget
                </div>
              </aside>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
