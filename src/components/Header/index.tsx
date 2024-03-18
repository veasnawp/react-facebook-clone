import { useEffect, useMemo, useRef, useState } from "react";
import { IconsComponent, avatar, avatarIcon } from "../icons/index";
import { useMediaQuery } from "../../assets/hooks/use-media-query";

const menuIcons = {
  home:
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z">
      </path>
    </svg>,
    video:
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
    <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
    <path
      d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z">
    </path>
  </svg>,
  shop:
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
      <path
        d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z">
      </path>
    </svg>,
  group:
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
      <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
      <path
        d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z">
      </path>
    </svg>,
  // game:
  //   <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
  //     <path
  //       d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z">
  //     </path>
  //     <path
  //       d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z">
  //     </path>
  //   </svg>,
  menu: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" ><path d="M3.25 2.75a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5H3.25zM2 12c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 13.25 2 12.69 2 12zm0 8c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 21.25 2 20.69 2 20z"></path></svg>
};

export const Header = () => {
  return (
    <div id="header">
      <MainLogo />
      <SearchBox />
      <TopMainMenu />
      <RightTopMenu />
      <div className={'fixed inset-0 z-[1] h-[var(--header-height)]'}>
        <div className='relative-flex-col box-border h-[var(--header-height)] bg-[var(--nav-bar-background)]'>
        </div>
      </div>
    </div>
  )
}

const MainLogo = () => {

  return (
    <div className="fixed top-0 z-[3] ml-4 h-[var(--header-height)]">
      <div className="flex items-center h-full">
      <a href="/">
        <IconsComponent.logo fill="var(--fb-logo)" />
      </a>
      </div>
    </div>
  )
}
const searchBoxIcons = {
  arrowLeft: <svg viewBox="0 0 20 20" width={20} height={20} fill="currentColor" className="z-[1]">
    <g fillRule="evenodd" transform="translate(-446 -350)">
      <g fillRule="nonzero">
        <path
          d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
          transform="translate(355 153.5)"></path>
        <path d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z" transform="translate(355 153.5)"></path>
      </g>
    </g>
  </svg>,
  searchButton: <svg viewBox="0 0 16 16" width={16} height={16} fill="currentColor">
    <g fillRule="evenodd" transform="translate(-448 -544)">
      <g fillRule="nonzero">
        <path
          d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
          transform="translate(448 544)"
        />
        <path
          d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
          transform="translate(448 544)"
        />
        <path
          d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
          transform="translate(448 544)"
        />
        <path
          d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
          transform="translate(448 544)"
        />
      </g>
    </g>
  </svg>,
  cross: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd"
    d="M18.8512 6.45119C18.9367 6.36578 19.0045 6.26436 19.0509 6.15273C19.0972 6.04109 19.1211 5.92143 19.1211 5.80056C19.1212 5.6797 19.0975 5.56 19.0513 5.44831C19.0051 5.33661 18.9374 5.23511 18.852 5.14959C18.7666 5.06408 18.6651 4.99622 18.5535 4.9499C18.4419 4.90358 18.3222 4.8797 18.2013 4.87962C18.0805 4.87955 17.9608 4.90328 17.8491 4.94947C17.7374 4.99565 17.6359 5.06338 17.5504 5.14879L12 10.6992L6.45116 5.14879C6.27846 4.97609 6.04421 4.87906 5.79996 4.87906C5.55572 4.87906 5.32147 4.97609 5.14876 5.14879C4.97606 5.3215 4.87903 5.55575 4.87903 5.79999C4.87903 6.04424 4.97606 6.27849 5.14876 6.45119L10.6992 12L5.14876 17.5488C5.06325 17.6343 4.99541 17.7358 4.94913 17.8476C4.90285 17.9593 4.87903 18.0791 4.87903 18.2C4.87903 18.3209 4.90285 18.4407 4.94913 18.5524C4.99541 18.6642 5.06325 18.7657 5.14876 18.8512C5.32147 19.0239 5.55572 19.1209 5.79996 19.1209C5.9209 19.1209 6.04066 19.0971 6.15239 19.0508C6.26412 19.0045 6.36565 18.9367 6.45116 18.8512L12 13.3008L17.5504 18.8512C17.7231 19.0237 17.9572 19.1205 18.2013 19.1204C18.4454 19.1202 18.6795 19.0231 18.852 18.8504C19.0245 18.6777 19.1213 18.4435 19.1211 18.1994C19.121 17.9553 19.0239 17.7213 18.8512 17.5488L13.3008 12L18.8512 6.45119Z"
    fill="currentColor" />
</svg>
}

const SearchBox = () => {
  const stateDefaultValue = {
    activeSearch: false as (boolean | string),
    showArrowBG: false,
  }
  const [stateHelper, setStateHelper] = useState<typeof stateDefaultValue | Record<string,any>>(stateDefaultValue);
  const activeSearch = stateHelper.activeSearch
  const handleStateHelperChange = (updateStateHelper:typeof stateHelper) => setStateHelper({...stateHelper, ...updateStateHelper})

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  const mQuery = useMediaQuery();

  return (
    <div className={"fixed top-0 max-w-[100vw]".concat(
      activeSearch || mQuery > 1259 ? " w-80 z-[4]":" z-[3] w-[120px]"
    )}
      onBlur={(e) => {
        if(activeSearch === true){
          e.preventDefault();
          handleStateHelperChange({activeSearch: false})
        }
      }}
    >
      {
        activeSearch &&
        <div className="before:absolute before:top-0 before:box-shadow-inset before:shadow-[var(--shadow-2)] before:w-full before:h-full before:rounded-lg before:z-0"/>
      }
      <div className={"flex items-center h-[var(--header-height)]".concat( activeSearch ? " bg-[var(--nav-bar-background)]": "")}>
        <div className="w-full">
          <div className="flex items-center px-4">
            <div className="w-full">
              <div className="w-full flex items-center">
                {/* Search Box Action */}
                <div className="w-14 cursor-pointer">
                  <div className={activeSearch ? "relative-flex-col opacity-100 w-[20px]" : " opacity-0"}>
                    <div className="relative inline-flex flex-row items-stretch m-0 text-[var(--secondary-icon)]"
                      onMouseEnter={() => handleStateHelperChange({showArrowBG: true})}
                      onMouseLeave={() => handleStateHelperChange({showArrowBG: false})}
                      onClick={() => handleStateHelperChange({activeSearch: false})}
                    >
                     {searchBoxIcons.arrowLeft}
                    <div className={"absolute inset-[-8px] rounded-full z-0".concat(stateHelper.showArrowBG ? " bg-[var(--web-bg-color)]":"")}></div>
                    </div>
                  </div>
                </div>
                <div className={"relative flex items-stretch min-w-10 min-h-10 bg-[var(--web-bg-color)] p-1 rounded-full".concat((mQuery > 1259 || activeSearch) ? " w-full":"")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleStateHelperChange({activeSearch: true})
                    handleClick()
                  }}
                >
                  <span className="relative flex items-center p-2 pr-0 cursor-pointer z-10 text-[var(--secondary-icon)]">
                    {searchBoxIcons.searchButton}
                  </span>
                  <div className={"absolute top-0 z-[1]".concat(
                    mQuery > 1259 || activeSearch ? "" : " opacity-0"
                  )}>
                    <input
                      ref={ref}
                      className={"grow p-2 pl-8 text-sm bg-transparent outline-none".concat(
                        activeSearch || mQuery > 1259 ? "" : " w-10"
                      )}
                      dir="ltr"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-label="Search Facebook"
                      role="combobox"
                      placeholder="Search Facebook"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                      // type="search"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Search */}
      { activeSearch &&
        <div className="relative bg-[var(--card-background)] rounded-lg rounded-tl"
        onMouseEnter={() => (handleStateHelperChange({activeSearch: "onSearching"}))}
        onMouseLeave={() => (handleStateHelperChange({activeSearch: true}),handleClick())}
        >
          <div className="py-4">
            <div className="relative-flex-col">
              <div className="flex justify-between px-4 pb-2">
                <label className="text-[17px] font-semibold">Recent</label>
                <div className="text-[15px] text-[var(--blue-link)] hover:underline" role="button">
                  <a href="#edit-recent-search">Edit</a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="relative-flex-col">
                <ul>
                  {
                    [
                      {
                        label: "HTML and CSS for Beginner",
                      },
                      {
                        label: "Javascript Crash Course",
                      },
                      {
                        label: "React JS Tip and Trick",
                      },
                      {
                        label: "Full-Stack Web Developer",
                      },
                      {
                        label: "Web Developer Job",
                      },
                    ].map((item, i) => {
                      const bgPosition = i === 1
                      ? "bg-[center_-36px]"
                      : i === 2
                      ? "bg-[center_-72px]"
                      : i === 3
                      ? "bg-[center_-108px]"
                      : i === 4
                      ? "bg-[center_-144px]"
                      : "bg-[center_-0px]"

                      // Cannot use map method because of tailwind cannot generate css
                      // const bgPositions = [...Array(5).keys()].map((v => `bg-[center_-${v * 36}px]`))
                      const newPosts = ["2", "7", "5", "9", "1"]

                      return (
                        <li key={item.label}>
                          <div>
                            <div className='hover_menu_section px-2'>
                              <a href={"#".concat(item.label.replace(/ /g, "-").toLowerCase())}>
                              <div className='flex items-center text-[15px]'>
                                <div className='my-2 mr-2'>
                                {
                                  <i className={`bg-position bg-[url('/src/assets/facebook-icon-png-01.png')] ${bgPosition} w-9 h-9`}/>
                                }
                                </div>
                                <div className='grow'>
                                  <div className=" font-semibold">{item.label}</div>
                                  <div className="text-[var(--secondary-text)]">
                                    <span className="inline-flex justify-center items-center w-2 h-2 bg-[var(--primary-button-background)] rounded-full mr-2"></span>
                                    {`${newPosts[i]}+ new`}
                                  </div>
                                </div>
                                <div className="text-[var(--secondary-text)]">
                                  {searchBoxIcons.cross}
                                </div>
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
      }
    </div>
  )
}

const TopMainMenu = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [showOnlyRightSidebar, setOnlyRightSidebar] = useState(false);
  const mQuery = useMediaQuery();

  useEffect(() => {
    if(!(window && window.document)){
      return;
    }
    const $mainFeed = document.querySelector("#main-feed")
    const $leftSidebar = document.querySelector("#left-sidebar")
    const $rightSidebar = document.querySelector("#right-sidebar")
    if($mainFeed && $rightSidebar && $leftSidebar){
      $mainFeed.setAttribute("style", `${showOnlyRightSidebar ? "display: none":""}`)
      $rightSidebar.setAttribute("style", `${showOnlyRightSidebar ? "display: none":""}`)
      $leftSidebar.setAttribute("style", `${showOnlyRightSidebar ? "display: block":""}`)
      // if(showOnlyRightSidebar){
      //   $mainFeed.classList.add("!hidden")
      //   $rightSidebar.classList.add("!hidden")
      // } else {
      //   $mainFeed.classList.remove("!hidden")
      //   $rightSidebar.classList.remove("!hidden")
      // }
    }
  },[showOnlyRightSidebar])

  return (
    <div className={'fixed inset-0 z-[2] h-[var(--header-height)]'}>
      <div className='relative-flex-col box-border h-[var(--header-height)]'>
        <div className={'relative-flex-col justify-end'}>
          <div className='flex justify-center h-[var(--header-height)]'>
            <ul className={'flex items-end grow '.concat(
              mQuery < 700 ? "justify-start px-[110px]":"justify-center"
            )}>
              {
                Object.entries(menuIcons).map(([key, icon]) => {
                  // const activeTextColor = key === activeMenu
                  //   ? "text-[var(--primary-button-background)]"
                  //   : "text-[#65676B]";
                  // const activeBgColor =
                  // key === activeMenu
                  //   ? ( key === "menu" && showOnlyRightSidebar === false
                  //     ? ""
                  //     : "bg-[var(--primary-button-background)]"
                  //   )
                  //   : "";
                  // const hoverBgColor = key === activeMenu ? "" : "hover_menu_section";
                  let activeTextColor = "ext-[#65676B]"
                  let activeBgColor = ""
                  let hoverBgColor = "hover_menu_section"
                  if(key === activeMenu){
                    if(key === "menu" && showOnlyRightSidebar === false){
                      activeBgColor = ""
                    } else {
                      activeTextColor = "text-[var(--primary-button-background)]"
                      activeBgColor = "bg-[var(--primary-button-background)]"
                    }
                    hoverBgColor = ""
                  }


                  return (
                    <li key={key}
                      className={`min-w-[50px] grow `.concat(
                        mQuery > 1099 ? "max-w-[111.6px]":"max-w-[calc(15vw_-_55px)]",
                        mQuery > 1099 ? (key === "menu" ? " hidden": "")
                        : (
                          mQuery < 700 ? (key === "menu" ? "": " hidden") : ""
                        )
                      )}
                      onClick={() => {
                        if(key === "menu"){
                          setOnlyRightSidebar(!showOnlyRightSidebar);
                        }
                        setActiveMenu(key);
                      }}
                    >
                      <span>
                        <div className={`relative flex items-center h-[var(--header-height)] hover:p-1`}>
                          <div className={`absolute bottom-0 right-[2px] left-[2px] h-[3px] transition-transform ${activeBgColor}`}></div>
                          <a
                            href={"#".concat(key)}
                            className={`flex flex-col items-center justify-center w-full h-full ${hoverBgColor}`}
                            aria-current="page"
                            aria-label={key}
                          >
                            <span className={activeTextColor}>
                              {icon}
                              <span></span>
                            </span>
                          </a>
                        </div>
                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="absolute right-0 bottom-[-3px] w-full h-[3px] bg-[rgba(203,203,203,0.3)]"></div>
      </div>
    </div>
  )
}

export const rightTopMenuIcons = {
  cubeMenu: <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
    <path
      d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z">
    </path>
  </svg>,
  messenger: <svg viewBox="0 0 12 13" width={20} height={20} fill="currentColor">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <path
        d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82">
      </path>
    </g>
  </svg>,
  notification: <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
    <path
      d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z">
    </path>
  </svg>,
  profilePic: <img className='image_circle w-9 h-9' src={avatar} alt={"Veasna Meta"} />
}

const RightTopMenu = () => {
  const stateDefaultValue = {
    activeDropdown: -1,
    activeDropdownOutside: false,
    showArrowBG: false,
  }
  const [stateHelper, setStateHelper] = useState<typeof stateDefaultValue | Record<string,any>>(stateDefaultValue);
  const activeDropdown = stateHelper.activeDropdown
  const handleStateHelperChange = (updateStateHelper:typeof stateHelper) => setStateHelper({...stateHelper, ...updateStateHelper})

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  // useEffect(() => {
  //   console.log(stateHelper)
  // }, [stateHelper])

  return (
    <div className="fixed top-0 right-0 z-[3] pl-2 pr-4"
      onBlur={(e) => {
        if(stateHelper.activeDropdownOutside === true){
          e.preventDefault();
          handleStateHelperChange({activeDropdown: -1})
        }
      }}
    >
      <div className="relative flex items-center justify-center h-[var(--header-height)]">
        {
          Object.entries(rightTopMenuIcons).map(([key, icon], i) => {

            return (
              <div key={key} className={"mr-2 cursor-pointer"}
                onClick={(e) => {
                  e.preventDefault();
                  handleStateHelperChange({activeDropdown: i, activeDropdownOutside: true});
                  handleClick()
                }}
              >
                <div className="relative">
                  <div className="">
                    <div className={"relative flex items-center justify-center w-[40px] h-[40px] rounded-full ".concat(activeDropdown === i ? " bg-[rgba(170,201,255,0.30)] hover:bg-[rgba(170,201,255,0.45)] text-[var(--accent)]":" bg-[var(--secondary-button-background)] hover:bg-[#dadbde] text-[var(--primary-text)]")}>
                      {icon}
                      {
                        key === "profilePic" && (
                          <div className="absolute bottom-[-2px] right-[-2px] text-[var(--primary-icon)] bg-[var(--secondary-button-background)] rounded-full border-[3px] border-[#ffffff] z-[1]">
                            <svg viewBox="0 0 16 16" width={12} height={12} fill="currentColor">
                              <g fillRule="evenodd" transform="translate(-448 -544)">
                                <path fillRule="nonzero"
                                  d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z">
                                </path>
                              </g>
                            </svg>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="relative">
      <div className="absolute top-0 z-0">
        <input ref={ref} className="w-0 outline-none" type="text" />
      </div>
      </div>
      {/* Dropdown Messenger and Notification */}
      <div>
      { stateHelper.activeDropdownOutside && (
        [
          {component: DropdownLoading},
          {component: DropdownMessages},
          {component: DropdownNotifications},
          {component: DropdownLoading},
        ].map((item, i) => {

          return (
            <div key={i}>
              {
                (activeDropdown === i) && item.component && <item.component
                onMouseEnter={() => {
                  handleStateHelperChange({activeDropdownOutside: "onShowDropdown"});
                }}
                onMouseLeave={() => {
                  handleStateHelperChange({activeDropdownOutside: true});
                  handleClick();
                }}

                />
              }

            </div>
          )
        })
      )}
      </div>
    </div>
  )
}


const DropdownSection = ({children, ...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {

  return (
    <div>
      <div className="relative">
        <div className="relative-flex-col">
          <div className="relative">
            <div className="absolute top-0 right-0 min-w-[360px] max-h-[calc(100vh_-_var(--header-height)_-_16px)]">
              <div className="relative bg-[var(--card-background)] rounded-lg rounded-t-none box-shadow shadow-[var(--card-box-shadow)] z-1" {...props}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const dropdownMessengerIcons$1 = {
  threeDots: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  resizeFourDirections: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3V9.75H4.5V5.57775L10.9222 12L4.5 18.4222V14.25H3V21H9.75V19.5H5.57775L12 13.0778L18.4222 19.5H14.25V21H21V14.25H19.5V18.4222L13.0778 12L19.5 5.57775V9.75H21V3H14.25V4.5H18.4222L12 10.9222L5.57775 4.5H9.75V3H3Z" fill="currentColor"/>
  </svg>,
  edit: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 17.013L11.413 16.998L21.045 7.45799C21.423 7.07999 21.631 6.57799 21.631 6.04399C21.631 5.50999 21.423 5.00799 21.045 4.62999L19.459 3.04399C18.703 2.28799 17.384 2.29199 16.634 3.04099L7 12.583V17.013ZM18.045 4.45799L19.634 6.04099L18.037 7.62299L16.451 6.03799L18.045 4.45799ZM9 13.417L15.03 7.44399L16.616 9.02999L10.587 15.001L9 15.006V13.417Z" fill="currentColor"/>
  <path d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z" fill="currentColor"/>
  </svg>
}

const dataMessages = [
  {
    label: "Web Developer Teacher", message: "you: thank you teacher 😍",
  },
  {
    label: "English Teacher", message: "writing test tomorrow",
  },
  {
    label: "My Mummy", message: "you: ស្អែកអត់រៀនទេម៉ាក់",
  },
  {
    label: "My Sister", message: "buy me a ice cappuccino 🥤",
  },
  {
    label: "My Friend", message: "football heh...",
  },
];

const DropdownMessages = ({...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const [_, _func] = useState(-1);
  // const [activeScroll, setActiveScroll] = useState(false);

  const [messages, setMessages] = useState<typeof dataMessages | Record<string, any>[]>(dataMessages);
  const multiDataMessage = useMemo(() => {
    const multiDataMessage = [] as typeof messages;
    [...Array(3).keys()].map((_) => dataMessages as typeof messages).map((arr) => {
      arr.forEach((v, i) => {
        v[i] = i
        multiDataMessage.push(v)
      });
    });

    return multiDataMessage
  }, []);

  let isJustOneTimeLoading = true;
  useEffect(() => {
    if(isJustOneTimeLoading){
      setMessages(multiDataMessage)
      // console.log(multiDataMessage)
      isJustOneTimeLoading = false;
    }
  }, [])

  return (
    <DropdownSection {...props}>
      <div className="relative-flex-col"
        // onMouseEnter={() => setActiveScroll(true)}
        // onMouseLeave={() => setActiveScroll(false)}
      >
        <div className={"rounded-scrollbar relative py-[12px] z-[1] overflow-x-hidden overflow-y-hidden max-h-[calc(100vh_-_var(--header-height)_-_66px)] hover:overflow-y-scroll"}>

          <div>
            <div className="flex justify-between px-[12px]">
              <div className="text-2xl font-bold">{`Chats`}</div>
              <div className="flex">
                {
                  Object.entries(dropdownMessengerIcons$1).map(([key, icon],i) => {
                    return (
                      <div key={key} className={"flex p-[6px] rounded-full cursor-pointer".concat(
                        _ === i ? " bg-[var(--web-bg-color)]":""
                      )}
                      onMouseEnter={() => _func(i)}
                      onMouseLeave={() => _func(-1)}
                      >
                        <div className="flex items-center">
                          <div className="flex items-center text-[var(--secondary-text)]">
                            {icon}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div>
            <div className="w-full">
              <div className="flex items-center px-[12px] my-2">
                <div className="w-full">
                  <div className="w-full flex items-center">
                    {/* Search Box Action */}
                    <div className="hidden w-14 cursor-pointer">
                      <div className={"opacity-0"}>
                        <div className="relative inline-flex flex-row items-stretch m-0">
                        {searchBoxIcons.arrowLeft}
                        <div className={"absolute inset-[-8px] rounded-full z-0"}></div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-stretch w-full min-w-10 min-h-10 bg-[var(--web-bg-color)] p-1 rounded-full ">
                      <span className="flex items-center p-2 pr-0">
                        {searchBoxIcons.searchButton}
                      </span>
                      <input
                        className="grow p-2 text-sm bg-transparent outline-none"
                        dir="ltr"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-label="Search Facebook"
                        role="combobox"
                        placeholder="Search Facebook"
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                        // type="search"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-[12px]">
              <div className="relative">
                <div className="flex">
                  <div className="flex items-center px-[12px] rounded-full h-9 text-[15px] text-center text-[var(--blue-link)] font-semibold bg-[rgba(170,201,255,0.30)] hover:bg-[rgba(170,201,255,0.45)]">
                    <a href="#">{`Inbox`}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="px-2">
              <div className="relative-flex-col">
                <ul>
                  {
                    [...messages].map((item, i) => {
                      return (
                        <li key={item.label?.concat(" ", i.toString())}>
                          <div>
                            <div className='hover_menu_section px-2 group'>
                              <div className="cursor-pointer">
                                <div className='flex items-center text-[15px]'>
                                  <div className='my-2 mr-2'>
                                  {
                                    <img className='image_circle w-[56px] h-[56px]' src={item.message?.startsWith("you:") ? avatar : avatarIcon} alt={item.label} />
                                  }
                                  </div>
                                  <div className='flex grow'>
                                    <div className="grow">
                                      <div className=" font-semibold">{item.label}</div>
                                      <div className={"".concat(
                                        item.message?.startsWith("you:") ? "text-[var(--secondary-text)]" : "font-semibold"
                                      )}>
                                        {item.message}
                                      </div>
                                    </div>
                                    {
                                      <div className="relative opacity-0 group-hover:opacity-100">
                                        <div className="absolute top-0 right-2">
                                          <div className="flex">
                                            <div className={"flex p-[6px] rounded-full cursor-pointer".concat(
                                              " bg-white shadow-[0_2px_6px_var(--shadow-1)]",
                                              // " bg-[var(--web-bg-color)]",
                                            )}
                                            >
                                              <div className="flex items-center">
                                                <div className="flex items-center text-[var(--secondary-text)]">
                                                {dropdownMessengerIcons$1.threeDots}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    }
                                  </div>
                                  <div className="relative text-[var(--secondary-text)]">
                                    {
                                      <span className={"inline-flex justify-center items-center w-3 h-3 bg-[var(--primary-button-background)] rounded-full".concat(
                                        item.message?.startsWith("you:") ? " opacity-0" : ""
                                      )}></span>
                                    }
                                  </div>
                                </div>
                              </div>
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
        <div>
          <div className="py-4 shadow-[0_-1px_0_0_var(--shadow-1),inset_0_1px_0_0_var(--shadow-inset)]">
            <div className="text-[15px] text-center text-[var(--blue-link)] font-semibold">
              <a href="#messenger">{`See all in Messenger`}</a>
            </div>
          </div>
        </div>
      </div>
    </DropdownSection>
  )
}

const dataNotifications = [
  {
    text: "You have a new friend suggestion: Phirom", type: "default", unRead: true
  },
  {
    text: "So Nita's birthday was yesterday.", type: "birthday", unRead: false
  },
  {
    text: "You have a new friend suggestion: Phirom", type: "default", unRead: false
  },
  {
    text: "Raksmey posted in Khmer Freelancer Web Developer: \"Python From Scratch Lesson 4 PDF (Python...\".", type: "group", unRead: true
  },
  {
    text: "Lihouv posted in Python Programming Beginners ✪: \"Python From Scratch Lesson 4 PDF (Python...\".", type: "group", unRead: false
  },
  {
    text: "You can check out top reels picked for you.", type: "video", unRead: true
  },
]

const DropdownNotifications = ({...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const [_, _func] = useState(-1);
  // const [activeScroll, setActiveScroll] = useState(false);

  const [notifications, setNotifications] = useState<typeof dataNotifications | Record<string, any>[]>(dataNotifications);
  const multiDataNotifications = useMemo(() => {
    const multiDataNotifications = [] as typeof notifications;
    [...Array(2).keys()].map(_ => dataNotifications as typeof notifications).map((arr) => {
      arr.forEach((v, i) => {
        v[i] = i
        multiDataNotifications.push(v)
      });
    });

    return multiDataNotifications
  }, []);

  let isJustOneTimeLoading = true;
  useEffect(() => {
    if(isJustOneTimeLoading){
      setNotifications(multiDataNotifications)
      // console.log(multiDataNotifications)
      isJustOneTimeLoading = false;
    }
  }, [])

  return (
    <DropdownSection {...props}>
      <div className="relative-flex-col"
        // onMouseEnter={() => setActiveScroll(true)}
        // onMouseLeave={() => setActiveScroll(false)}
      >
        <div className={"relative py-[12px] z-[1] rounded-scrollbar overflow-x-hidden overflow-y-hidden max-h-[calc(100vh_-_var(--header-height)_-_16px)] hover:overflow-y-scroll"}>

        <div>
          <div className="flex justify-between px-[12px]">
            <div className="text-2xl font-bold">{`Notifications`}</div>
            <div className="flex">
              {
                Object.entries({threeDots: dropdownMessengerIcons$1.threeDots}).map(([key, icon],i) => {
                  return (
                    <div key={key} className={"flex p-[6px] rounded-full cursor-pointer".concat(
                      _ === i ? " bg-[var(--web-bg-color)]":""
                    )}
                    onMouseEnter={() => _func(i)}
                    onMouseLeave={() => _func(-1)}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center text-[var(--secondary-text)]">
                          {icon}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div>
          <div className="p-[12px]">
            <div className="relative">
              <div className="flex">
                <div className="flex items-center px-[12px] mr-2 rounded-full h-9 text-[15px] text-center text-[var(--blue-link)] font-semibold bg-[rgba(170,201,255,0.30)] hover:bg-[rgba(170,201,255,0.45)]">
                  <a href="#">{`All`}</a>
                </div>
                <div className="flex items-center px-[12px] rounded-full h-9 text-[15px] text-center font-semibold hover:bg-[var(--web-bg-color)]">
                  <a href="#">{`Unread`}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div><h2 className="px-4 text-[17px] font-semibold"><span>{`Earlier`}</span></h2></div>
        <div>
          <div className="px-2">
            <div className="relative-flex-col">
              <ul>
                {
                  [...multiDataNotifications]
                  .map((item, i) => {
                    return (
                      <li key={i}>
                        <div>
                          <div className='hover_menu_section px-2 group'>
                            <div className="cursor-pointer">
                            <div className='flex items-center text-[15px]'>
                              <div className='relative my-2 mr-2 min-w-[56px]'>
                                {
                                  <img className='image_circle w-[56px] h-[56px]' src={item.unRead ? avatar : avatarIcon} alt={item.text} />
                                }
                                <div className="absolute bottom-[-10px] right-[-5px]">
                                  <div>
                                    <i className={`bg-position bg-[url('/src/assets/facebook-icon-png-02.png')] ${"bg-[center_-580px]"} w-7 h-7`}/>
                                  </div>
                                </div>
                              </div>
                              <div className="flex grow">
                                <div className='relative flex py-3 max-w-[220px]'>
                                  <div className="flex">
                                    <div className={"flex flex-col grow my-[-5px] ".concat(
                                        item.unRead ? "font-semibold" : "text-[var(--secondary-text)]"
                                      )}>
                                      <div className="text-line-3">{item.text}</div>
                                      <div className={"text-[13px] leading-4 ".concat(item.unRead ? "text-[var(--accent)]" : "")}>
                                        {`2 hours ago`}
                                      </div>
                                    </div>
                                    {/* {
                                      <div className="relative opacity-1 group-hover:opacity-100">
                                        <div className="absolute top-0 right-2">
                                          <div className="flex">
                                            <div className={"flex p-[6px] rounded-full cursor-pointer".concat(
                                              " bg-white shadow-[0_2px_6px_var(--shadow-1)]",
                                              // " bg-[var(--web-bg-color)]",
                                            )}
                                            >
                                              <div className="flex items-center">
                                                <div className="flex items-center text-[var(--secondary-text)]">
                                                {dropdownMessengerIcons$1.threeDots}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    } */}

                                  </div>
                                </div>
                                <div className="relative flex grow items-center text-[var(--secondary-text)] min-w-4">
                                  {
                                    // item.unRead &&
                                    <span className={"inline-flex justify-center items-center w-3 h-3 bg-[var(--primary-button-background)] rounded-full".concat(item.unRead ? "":" opacity-0")}></span>
                                  }
                                  <div className="absolute">
                                    <div className="relative right-[45px] opacity-0 group-hover:opacity-100">
                                      <div className="flex">
                                        <div className={"flex p-[6px] rounded-full cursor-pointer".concat(
                                          " bg-white shadow-[0_2px_6px_var(--shadow-1)]",
                                          // " bg-[var(--web-bg-color)]",
                                        )}
                                        >
                                          <div className="flex items-center">
                                            <div className="flex items-center text-[var(--secondary-text)]">
                                            {dropdownMessengerIcons$1.threeDots}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="flex w-full mx-4 mt-4 mb-2">
                <div className="flex w-full items-center justify-center rounded-md px-3 h-9 bg-[var(--secondary-button-background)] cursor-pointer">
                  <div className="flex items-center justify-center text-[15px] font-semibold">
                    <span>{`See previous notifications`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </DropdownSection>
  )
}

const DropdownLoading = ({...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {

  return (
    <DropdownSection {...props}>
      <div className="relative-flex-col h-[200px]">
        <div className="flex items-center justify-center h-full">
          <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-[var(--primary-button-background)] border-t-transparent"></div>
        </div>
      </div>
    </DropdownSection>
  )
}

export { searchBoxIcons }