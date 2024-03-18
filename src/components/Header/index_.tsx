import { IconsComponent } from "../icons";

const menuIcons = {
  home:
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z" />
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
  game:
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
      <path
        d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z">
      </path>
      <path
        d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z">
      </path>
    </svg>
};

export const Header = () => {
  return (
    <div id="header">
      <MainLogo />
      <SearchBox />
      <TopMainMenu />
    </div>
  )
}

const MainLogo = () => {

  return (
    <div className="fixed inset-0 z-[3] flex items-center ml-4 h-[var(--header-height)]">
      <a href="/">
        <IconsComponent.logo fill="var(--fb-logo)" />
      </a>
    </div>
  )
}

const SearchBox = () => {

  return (
    <div className="fixed inset-0 z-[4] w-80 max-w-[100vw] h-[var(--header-height)]">
      <div className="flex items-center h-full">
        <div className="w-full">
          <div className="flex items-center px-4">
            <div className="w-full">
              <div className="w-full flex gap-8 items-center">
                <div >
                  <div className="opacity-0">
                    <svg viewBox="0 0 20 20" width={20} height={20} fill="var(--secondary-icon)">
                      <g fillRule="evenodd" transform="translate(-446 -350)">
                        <g fillRule="nonzero">
                          <path
                            d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
                            transform="translate(355 153.5)"></path>
                          <path d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z" transform="translate(355 153.5)"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="relative flex items-stretch w-full min-w-10 min-h-10 bg-[var(--web-bg-color)] p-1 rounded-full ">
                  <span className="flex items-center p-2 pr-0">
                    <svg viewBox="0 0 16 16" width={16} height={16} fill="var(--secondary-icon)">
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
                    </svg>
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
                    type="search"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Search */}
      {/* <div className="bg-white top-[var(--header-height)]">
        <div className="p-4">
          <div><label>Recent</label></div>
          <div>
            <div className="relative-flex-col">
              <div>TEST 1</div>
              <div>TEST 2</div>
              <div>TEST 3</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

const TopMainMenu = () => {

  return (
    <div className='fixed inset-0 z-[1] h-[var(--header-height)]'>
      <div className='relative-flex-col bg-[var(--nav-bar-background)] box-border h-[var(--header-height)]'>
        <div className='relative-flex-col justify-end'>
          <div className='flex justify-center h-[var(--header-height)]'>
            <ul className='flex items-end justify-center grow'>
              {
                Object.entries(menuIcons).map(([key, icon]) => {
                  const activeTextColor = key === "home"
                    ? "text-[var(--primary-button-background)]"
                    : "text-[#65676B]";
                  const activeBgColor = key === "home"
                    ? "bg-[var(--primary-button-background)]"
                    : "";

                  const hoverBgColor = key === "home" ? "" : "hover:bg-[var(--web-bg-color)]";

                  return (
                    <li key={key} className={`max-w-[111.6px] min-w-[50px] grow`}>
                      <span>
                        <div className={`relative flex items-center h-[var(--header-height)] ${hoverBgColor} hover:p-2`}>
                          <div className={`absolute bottom-0 right-[2px] left-[2px] h-[3px] transition-transform ${activeBgColor}`}></div>
                          <a className='flex flex-col items-center justify-center w-full h-full' aria-current="page" aria-label={key} href="/">
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
      </div>
    </div>
  )
}
