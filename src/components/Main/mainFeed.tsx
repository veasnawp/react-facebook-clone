import avatar from "../../assets/user-avatar.jpg"
import { useMediaQuery } from "../../assets/hooks/use-media-query"
import { IconsComponent, ReactionIcons, avatarIcon, emojiFaceXd, media, myPhoto_1, videoCamera } from "../icons";
import { useEffect, useState } from "react";
import { toCapitalized } from "../utils";
import { Prettify } from "../..";


function StoryBoard() {
  return (
    <div className="py-4">
    <div className='min-h-[250px]'>
      <div className="flex space-x-2 mx-auto max-w-2xl relative mb-4">
        <div className="w-[140px] h-[250px] rounded-xl overflow-hidden flex flex-col group cursor-pointer relative box-shadow shadow shadow-[var(--shadow-base)]">
            <img className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={avatar} alt="Veasna Meta"/>
            <div className="bg-[var(--card-background)] relative flex-1 flex flex-col">
                <div className="bg-[var(--primary-button-background)] p-0.5 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                    <p> Create Story </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>

        {
          [...Array(3).keys()].map((item) => {

            return (
              <div key={item} className="w-[140px] h-[250px] rounded-xl overflow-hidden flex flex-col relative group cursor-pointer box-shadow shadow shadow-[var(--shadow-base)]">
                  <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=1" alt="thumbnail user's story"/>

                  <div className="w-8 h-8 border-4 box-content border-[var(--primary-button-background)] rounded-full overflow-hidden absolute left-2.5 top-3">
                      <img className="w-full h-full object-cover" src={avatar} alt="Veasna Meta"/>
                  </div>

                  <div className="absolute inset-x-3 bottom-1">
                      <p className="text-white font-semibold">Your Story</p>
                  </div>

                  <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
              </div>
            )
          })
        }


        <div className="absolute bg-white hover:bg-[var(--web-bg-color)] gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
      </div>
    </div>
    </div>
  )
}

function CreateNewPostSection() {

  return (
    <div className="mb-4">
      <div className="relative-flex-col">
        <div className="relative w-full box-border">
          <div className="px-4 py-2 bg-[var(--card-background)] box-shadow shadow-[var(--shadow-base)] rounded-lg">
            <div className="relative-flex-col text-[var(--secondary-text)]">
              <div className='flex items-center text-[15px]'>
                <a href="#profile" className="flex items-center mr-2">
                  <div className='flex'>
                    <img className='image_circle w-10 h-10' src={avatar} alt={"Veasna Meta"} />
                  </div>
                </a>
                <div className='flex items-center justify-start grow px-3 py-2 min-h-10 rounded-full cursor-pointer bg-[var(--web-bg-color)] hover:hover:bg-[rgba(158,158,158,0.2)]'>
                  <div className="w-full break-words text-[17px] select-none">
                    <span>{`What's on your mind, Veasna?`}</span>
                  </div>
                </div>
              </div>
              <div className="relative-flex-row justify-between pt-2 mt-3 border-t-[1px] border-[var(--secondary-button-background)]">
                {
                  [
                    {
                      icon: videoCamera, label: "Live Video",
                    },
                    {
                      icon: media, label: "Photo/video",
                    },{
                      icon: emojiFaceXd, label: "Feeling/activity",
                    },
                  ].map((item) => {

                    return (
                      <div key={item.label} className='hover_menu_section flex items-center justify-center p-2 w-full select-none cursor-pointer'>
                        <div className="flex items-center justify-center">
                          <div className="inline-flex">
                            <span className="mr-1">
                              <img src={item.icon} alt={item.label} />
                            </span>
                          </div>
                          <div><span className="text-[15px] font-semibold">{item.label}</span></div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function random(digit=3) {
  const value = parseInt(String(Math.random() * (10 ** digit)))
  if(String(value).length < digit){
    return 10 ** digit
  }
  return value > 0 ? value : 1
}
function formatCount(count:number) {
  let countStr: string;
  if(count === 1000) countStr = `1K`
  else if(count > 1000 && count < 1000000) countStr = `${(count/1000).toFixed(2)}K`
  else if(count === 1000000) countStr = `1M`
  else if(count > 1000000) countStr = `${(count/1000000).toFixed(2)}M`
  else countStr = `${count}`

  return countStr
}

const postText1 = `#កាលខ្ញុំនៅតូច

កាលខ្ញុំនៅតូច រប៉ិលរប៉ូច រពឹសខុសគេ
បើរឿងដើរលេង គ្មានចូលផ្ទះទេ រវល់គុណទ្វេ
ពីព្រឹកដល់យប់។

កាលខ្ញុំនៅតូច គេហៅ.ក្បាលខូច ខូចគួរឲ្យស្អប់
ស្អប់ព្រោះស្រលាញ់ ចាញ់បោកឡើងឡប់ បោកគួរឲ្យស្អប់
បោកស៊ីសាហាវ។

កាលខ្ញុំនៅតូច មានរឿងតិចតួច អាងដោះខោអាវ
មោះ! ចូលខ្សែរេញ វ៉ៃគ្នាមួយប្រាវ រួចពាក់ខោអាវ
តោះ! យើងដើរលេង។

កាលខ្ញុំនៅតូច បើរឿងខាងលួច រៀនចេះខ្លួនឯង
គ្មានអ្នកប្រដៅ លួចមិនចេះក្រែង លួចមុខគេឯង
អាពណ៌ក្រហម។

កាលខ្ញុំនៅតូច អារឿងខូចៗ កុំចង់ប្រលោម
តែមិនខិលទេ ខូចសមទំនង ខូចមានត្រណម
ខូចបែបក្មេងវ័យ។

អផ្សុកពេកតែងលេង😊😊`


const postText2 =`ការកំណត់ជោគគជ័យក្នុងជីវិតការងាររបស់ខ្ញុំ៖
  1. ជំនឿ: ភាពជឿជាក់មានហើយ
  2. ជំនាញ: ត្រឹម70% ធ្វើការបណ្តើរ បណ្តុះបណ្តាលខ្លួនឯងបណ្តើរ
  3. ជំនួយ: ឥឡូវតែឯងទេ
  4. ជំហាន: រៀនឈានតិចៗ ចូលទៅសិក្សាបរិបទជុំវិញដែលទាក់ទិននឹងជំនាញ
  5. ជំហរ: តែងតែមានជំហរ តែដើមទុនមិនអំណោយផល ត្រឡប់ទៅចំណុចទី២វិញចុះអ្នកវិញ...?`

const postObj = {
  postId: "pfbid",
  description: random(10) % 2 === 0 ? postText1 : postText2,
  thumbnail: myPhoto_1,
  likeCount: random(5),
  commentCount: parseInt((random(4)/2).toString()),
  shareCount: parseInt((random(3) * 4 / 3).toString()),
  publishedPostDate: "February " + (random(1) * 3 + 3),
  commentCollection: [
    {
      id: Math.random(), username: "sonita", name: "So Nita", avatar: avatarIcon,
      comment: {
        text: "",
        sticker: "love,wow",
        likeCount: 0,
        publishedDays: random(1)  + "d",
        reply: null,
      },
    }
  ],
  owner: {
    id: "12345", username: "VeasnaMeta", name: "Veasna Meta", avatar: avatar
  },
};

interface PostSectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dataPost: typeof postObj
}
function PostSection({
    dataPost, ...props
  }: PostSectionProps
) {
  type ReactionKey = "like"|"love"|"care"|"haha"|"wow"|"sad"|"angry"
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showReaction, setShowReaction] = useState<boolean|string>(false);
  const [addReactionIcon, setAddReactionIcon] = useState("");

  const stateDefaultValue = {
    reactionKey: ""
  }
  type StateHelperProps = Prettify<typeof stateDefaultValue | Record<string,any>>
  const [statHelper, setStatHelper] = useState<StateHelperProps>(stateDefaultValue);
  const handleStateHelper = (updateStatHelper: StateHelperProps) => setStatHelper({...statHelper, ...updateStatHelper})

  const reactionKeys = ["like","love","care","haha","wow","sad","angry"];

  const fullDescriptionArray = [] as string[];

  dataPost.description.split('\n').forEach((text) => {

    if(text === ""){
      fullDescriptionArray.push("\n");
    } else  if(text.length <= 60 ){
      fullDescriptionArray.push(text);
    } else {
      text.match(/(.|[\r\n]){1,60}/g)?.forEach((t) => {
        fullDescriptionArray.push(t)
      })
    }
  })
  const shortDescription = fullDescriptionArray.filter((_,i) => i < 4);
  const moreDescription = fullDescriptionArray.filter((_,i) => i >= 4);

  const mQuery = useMediaQuery();
  // useEffect(() => {
  //   console.log(addReactionIcon)
  // }, [addReactionIcon])

  return (
    <div className="transition-all" {...props}>
      <div className="bg-[var(--card-background)] box-shadow shadow-[var(--shadow-base)] rounded-lg mt-4">
        <div>
          <div>
            <div className="flex px-3 pt-3">
              <div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">
                    <img className="image_circle w-10 h-10" src={dataPost.owner.avatar} alt={dataPost.owner.name} />
                  </span>
                </div>
              </div>
              <div className="flex grow justify-between">
                <div>
                  <div className="relative-flex-col font-semibold">
                    <span className="text-[15px]">{dataPost.owner.name}</span>
                    <div className="inline-flex">
                      <div className="mr-1">
                        <span className="text-[12px] text-[var(--secondary-text)]">{`${dataPost.publishedPostDate} · `}</span>
                      </div>
                      <span className="flex items-center justify-center">
                        <img className="opacity-70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH4wIaDxoIrMoSwwAAAAJiS0dEAP+Hj8y/AAAArklEQVQYGQXBsS5DYQAG0PNfL2D9B+9gMxpNTSxM1stgl1S6egNewGpia6LLZejCZmkaQgwW0yVNqH7OAYrWVK831SoA1URnoKoGOo8qFBNnGrDm2od4VjjUaQDsmIuVEQ8GANZdORHxzpcK2HOstxTxy7ctwEhERPzw4lNjw6ZLsRARrwz9ufMmjoxdiFg6pZiLiLix69y9JwWqmZWFA9v2dW5VgGJoptebahX4B9YUSQkxUC/3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTI2VDIzOjI2OjA4LTA4OjAwDt8GrQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0yNlQyMzoyNjowOC0wODowMH+CvhEAAAAASUVORK5CYII=" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-9 h-9 hover:rounded-full hover:bg-[var(--web-bg-color)] cursor-pointer">
                    {IconsComponent.threeDots({width: 20, height: 20})}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 py-2">
              <div className="relative-flex-row">
                <div className="my-1">
                  <span className="block text-[15px] leading-5 font-medium text-left break-words text-[var(--primary-text)] min-w-0 max-w-full">
                    {
                      shortDescription.length > 0 && shortDescription.map((text, i) => {

                        return (
                          <div key={i} className="break-words">
                            <div className="text-start break-words whitespace-pre-wrap">
                              {text}
                              {
                                (dataPost.description.split('\n').filter((_,i) => i < 4).length  -1) === i && !showMoreDescription && (
                                  <>
                                  {`... `}
                                  <div className="inline bg-transparent text-[var(--primary-text)]" role="button" tabIndex={0}
                                    onClick={() => setShowMoreDescription(true)}
                                  >
                                    {`See more`}
                                  </div>
                                  </>
                                )
                              }
                            </div>
                          </div>
                        )
                      })
                    }
                    {
                      showMoreDescription && moreDescription.length > 0 && moreDescription.map((text, i) => {
                        const key = String(parseInt(String(Math.random() * 1000 * (i+1))))

                        return (
                          <div key={String(i).concat("-", key)} className="break-words">
                            <div className="text-start break-words whitespace-pre-wrap">
                              {text}
                            </div>
                          </div>
                        )
                      })
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <a href="#photo">
                  <div className="relative-flex-col items-center justify-center w-full bg-[rgb(57,51,59)]">
                    {/*  min-w-[500px] w-[calc(-244.214px_+_75.1429vh)] */}
                    <div className="max-w-full">
                      <div className="">
                        <img src={dataPost.thumbnail} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="relative-flex-row items-center justify-between py-4 mx-4 text-[15px] font-semibold text-[var(--secondary-text)] select-none">
                <div>
                  <div className="flex items-center">
                    <div className="inline-flex mr-1">
                      <div className="flex cursor-pointer">
                        <div className="relative flex items-center justify-center border border-[#fff] z-[2] right-[-2px]">
                          <ReactionIcons.like width={18} height={18} />
                        </div>
                        <div className="relative flex items-center justify-center border border-[#fff] z-1">
                          <ReactionIcons.love width={18} height={18} />
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer hover:underline">{`ChanBery, Nita and ${formatCount(dataPost.likeCount - 2)} others`}</div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <div className="flex mr-3 cursor-pointer text-[#565656] hover:underline">
                      <span className="mr-1">{`${formatCount(dataPost.commentCount)}`}</span>
                      {
                        mQuery < 1170 && mQuery > 1099
                        ? <ReactionIcons.commentOutline width={18} height={18} fill="#565656" />
                        : mQuery < 700
                        ? <ReactionIcons.commentOutline width={18} height={18} fill="#565656" />
                        : <span>{` comments`}</span>
                      }
                    </div>
                    <div className="flex cursor-pointer hover:underline">
                      <span className="mr-1">{`${formatCount(dataPost.shareCount)}`}</span>
                      {
                        mQuery < 1170 && mQuery > 1099
                        ? <ReactionIcons.shareOutline width={18} height={18} strokeWidth="3" stroke="#565656" />
                        : mQuery < 700
                        ? <ReactionIcons.shareOutline width={18} height={18} strokeWidth="3" stroke="#565656" />
                        : <span>{` shares`}</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-4">
            <div className="relative-flex-row justify-between p-1 border-t border-b border-[rgba(0,0,0,0.2)] min-h-[45px]">
              {
                [
                  {icon: ReactionIcons.likeOutline, label: "Like"},
                  {icon: ReactionIcons.commentOutline, label: "Comment"},
                  {icon: ReactionIcons.shareOutline, label: "Share"},
                ].map((item, i) => {
                  const key = item.label
                  const isAddReaction = reactionKeys.some(v => v === addReactionIcon) && key === "Like"

                  return (
                    <div key={i} className={'relative flex items-center justify-center w-full select-none cursor-pointer px-2'.concat(
                      showReaction === "onDeciding" ? "":" hover_menu_section"
                    )}
                      onMouseEnter={() => key === "Like" && setShowReaction(true)}
                      onMouseLeave={() => key === "Like" && setShowReaction(false)}
                      onClick={(e) => {
                        e.preventDefault();
                        if(isAddReaction) {
                          setAddReactionIcon("")
                        } else if (addReactionIcon === "") {
                          setAddReactionIcon("like")
                        }
                        setShowReaction(false);
                      }}
                    >
                      <div className="flex items-center justify-center text-[var(--secondary-text)]">
                        <div className="inline-flex">
                          <span className="mr-2">
                            {
                              isAddReaction ?
                              ReactionIcons[addReactionIcon as ReactionKey]({width: 20, height: 20})
                              : <item.icon />
                            }
                          </span>
                        </div>
                        <div><span className={"text-[15px] font-semibold".concat(
                          isAddReaction ? (
                            addReactionIcon === "like"
                            ? " text-[rgb(8,102,255)]"
                            : addReactionIcon === "love"
                            ? " text-[rgb(243,62,88)]"
                            : ["care","haha","wow","sad"].some(v => addReactionIcon === v)
                            ? " text-[rgb(247,177,37)]"
                            : " text-[rgb(233,113,15)]"
                          )
                          : ""
                        )}>
                          {
                            toCapitalized(isAddReaction ? addReactionIcon : key)
                          }
                        </span></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {
              showReaction &&
              <div className="absolute top-[-45px] left-0 z-[99] transition-opacity"
                onMouseEnter={() => setShowReaction("onDeciding")}
                onMouseLeave={() => setShowReaction(false)}
              >
                <div className={"relative-flex-row z-[99] bg-[var(--card-background)] box-shadow-inset shadow-[var(--shadow-2)] rounded-full border border-[rgba(238,238,238,0.7)] p-1 h-[50px] group"}>
                  <div className="flex gap-2">
                    {
                      [
                        ...Object.entries(ReactionIcons).filter(([key]) =>
                          reactionKeys.some(v => v === key)
                        ).map((v) => ({
                          key: v[0],
                          icon: v[1]
                        }))
                      ].map((item) => {
                        const key = item.key

                        return (
                          <div key={key}
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setAddReactionIcon(key);
                              setShowReaction(false)
                            }}
                            onMouseEnter={() => handleStateHelper({reactionKey: key})}
                            onMouseLeave={() => handleStateHelper({reactionKey: ""})}
                          >
                            <span>
                              <div>
                                {
                                  statHelper.reactionKey === key ?
                                  <item.icon className="hover:transition-all w-11 h-11" width={40} height={40} />
                                  :
                                  <item.icon width={40} height={40} />
                                }
                              </div>
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          {
            dataPost.commentCollection.length > 0 && (
              <div>
                <div className="text-[15px] text-[var(--secondary-text)] font-semibold cursor-pointer hover:underline mx-4 pt-2 select-none">
                  <span>{`View more comments`}</span>
                </div>
              </div>
            )
          }
          {
            dataPost.commentCollection.length > 0 && (
              <div>
                {
                  dataPost.commentCollection.map((dataComment, i) => {

                    return (
                      <div key={dataComment.id * (i + 1)}>
                        <div className="flex pl-4 pt-2">
                          <div className="mr-2">
                            <div>
                              <a href={"#".concat(dataComment.username)}>
                                <img className="image_circle w-8 h-8" src={dataComment.avatar} alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="relative grow pr-4 overflow-hidden">
                            <div>
                              <div className="relative px-2 pt-1 text-[13px] font-semibold">
                                <a href={"#".concat(dataComment.username)}>{dataComment.name}</a>
                              </div>
                            </div>
                            <div className="flex break-words max-w-[calc(100%_-_26px)] text-[13px]">
                              <div className="relative mt-2">
                                {dataComment.comment.text &&
                                  <div>{dataComment.comment.text}</div>
                                }
                                {dataComment.comment.sticker && (
                                  dataPost.likeCount % 2 === 0 ?
                                  <div>
                                    <ReactionIcons.love width={72} height={72} />
                                  </div>
                                  :
                                  <div>
                                    <ReactionIcons.wow width={72} height={72} />
                                  </div>
                                )
                                }
                              </div>
                            </div>
                            <div>
                              <div className="flex text-[13px] text-[var(--secondary-text)] font-semibold min-w-[97px] mt-2">
                                <div className="mx-2 cursor-pointer hover:underline">
                                  <span><a href="#comment_id">{dataComment.comment.publishedDays}</a></span>
                                </div>
                                <div className={"mx-2 cursor-pointer hover:underline".concat(
                                  dataComment.comment.likeCount > 0 ? " text-[var(--blue-link)]" : ""
                                )}>
                                  <span>{`Like`}</span>
                                </div>
                                <div className="mx-2 cursor-pointer hover:underline">
                                  <span>{`Reply`}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          }


          <div>
            <div className="relative-flex-row p-4 text-[var(--secondary-text)]">
              <div className='flex items-center text-[15px] grow'>
                <a href="#profile" className="relative flex items-center mr-2">
                  <div className='flex'>
                    <img className='image_circle w-8 h-8' src={dataPost.owner.avatar} alt={dataPost.owner.name} />
                  </div>
                  <div className="absolute bottom-[-2px] right-[-2px] text-[var(--primary-icon)] bg-[var(--secondary-button-background)] rounded-full z-[1]">
                    <svg viewBox="0 0 16 16" width={12} height={12} fill="currentColor">
                      <g fillRule="evenodd" transform="translate(-448 -544)">
                        <path fillRule="nonzero"
                          d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z">
                        </path>
                      </g>
                    </svg>
                  </div>
                </a>
                <div className='flex items-center justify-start grow min-h-10 rounded-full cursor-pointer bg-[var(--web-bg-color)] hover:hover:bg-[rgba(158,158,158,0.2)]'>
                  <div className="pl-3 py-2 w-full break-words text-[15px] select-none">
                    <span>{`Comment as Veasna Meta`}</span>
                  </div>
                  <div>
                    <ul className="flex items-center justify-center min-h-10 mr-1">
                      {
                        [
                          {position: "bg-[center_-1099px]"},
                          {position: "bg-[center_-1184px]"},
                          {position: "bg-[center_-1133px]"},
                          {position: "bg-[center_-1218px]"},
                          {position: "bg-[center_-1337px]"},
                        ].map((item, i) => {

                          return (
                            <li key={i}>
                              <div>
                                <span>
                                  <div className="flex items-center justify-center w-[30px] h-[30px] hover:bg-[rgba(158,158,158,0.2)] rounded-full">
                                    <i className={`relative right-[-5px] opacity-70 bg-position bg-[url('/src/assets/facebook-icon-png-04.png')] ${item.position} w-[30px] h-4`}/>
                                  </div>
                                </span>
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
    </div>
  )
}

// function PostSection() {

//   return (
//     <div className="transition-all">
//       <div className="bg-[var(--card-background)] box-shadow shadow-[var(--shadow-base)] rounded-lg">
//         <div>
//           <div>
//             <div className="flex px-3 pt-3">
//               <div>
//                 <div className="flex items-center justify-center">
//                   <span className="mr-2">
//                     <img className="image_circle w-10 h-10" src={avatar} alt={"Veasna Meta"} />
//                   </span>
//                 </div>
//               </div>
//               <div className="flex grow justify-between">
//                 <div>
//                   <div className="relative-flex-col font-semibold">
//                     <span className="text-[15px]">Veasna Meta</span>
//                     {/* <span className="text-[12px] text-[var(--secondary-text)]">February 16 . O</span> */}
//                     <div className="inline-flex">
//                       <div className="mr-1">
//                         <span className="text-[12px] text-[var(--secondary-text)]">{`February 16 · `}</span>
//                       </div>
//                       <span className="flex items-center justify-center">
//                         <img className="opacity-70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH4wIaDxoIrMoSwwAAAAJiS0dEAP+Hj8y/AAAArklEQVQYGQXBsS5DYQAG0PNfL2D9B+9gMxpNTSxM1stgl1S6egNewGpia6LLZejCZmkaQgwW0yVNqH7OAYrWVK831SoA1URnoKoGOo8qFBNnGrDm2od4VjjUaQDsmIuVEQ8GANZdORHxzpcK2HOstxTxy7ctwEhERPzw4lNjw6ZLsRARrwz9ufMmjoxdiFg6pZiLiLix69y9JwWqmZWFA9v2dW5VgGJoptebahX4B9YUSQkxUC/3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTI2VDIzOjI2OjA4LTA4OjAwDt8GrQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0yNlQyMzoyNjowOC0wODowMH+CvhEAAAAASUVORK5CYII=" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-9 h-9 hover:rounded-full hover:bg-[var(--web-bg-color)] cursor-pointer">
//                     {IconsComponent.threeDots({width: 20, height: 20})}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="px-4 py-2">
//               <div className="relative-flex-row">
//                 <div className="my-1">
//                   <span className="block text-[15px] leading-5 font-medium text-left break-words text-[var(--primary-text)] min-w-0 max-w-full">
//                     {
//                       `ការកំណត់ជោគគជ័យក្នុងជីវិតការងាររបស់ខ្ញុំ៖
//                       1. ជំនឿ: ភាពជឿជាក់មានហើយ
//                       2. ជំនាញ: ត្រឹម70% ធ្វើការបណ្តើរ បណ្តុះបណ្តាលខ្លួនឯងបណ្តើរ
//                       3. ជំនួយ: ឥឡូវតែឯងទេ
//                       4. ជំហាន: រៀនឈានតិចៗ ចូលទៅសិក្សាបរិបទជុំវិញដែលទាក់ទិននឹងជំនាញ
//                       5. ជំហរ: តែងតែមានជំហរ តែដើមទុនមិនអំណោយផល ត្រឡប់ទៅចំណុចទី២វិញចុះអ្នកវិញ...?`.split('\n').map((text, i) => {

//                         return (
//                           <div key={i} className="break-words">
//                             <div className="text-start">
//                               {text}
//                             </div>
//                           </div>
//                         )
//                       })
//                     }
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div>
//               <div>
//                 <a href="">
//                   <div className="relative-flex-col items-center justify-center w-full bg-[rgb(57,51,59)]">
//                     {/*  min-w-[500px] w-[calc(-244.214px_+_75.1429vh)] */}
//                     <div className="max-w-full">
//                       <div className="">
//                         <img src={myPhoto_1} alt="photo" />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div>
//               <div className="relative-flex-row items-center justify-between py-4 mx-4 text-[15px] font-semibold text-[var(--secondary-text)]">
//                 <div>
//                   <div className="flex items-center">
//                     <div className="inline-flex mr-1">
//                       <div className="flex">
//                         <div className="relative flex items-center justify-center border border-[#fff] z-[2] right-[-2px]">
//                           <ReactionIcons.like width={18} height={18} />
//                         </div>
//                         <div className="relative flex items-center justify-center border border-[#fff] z-1">
//                           <ReactionIcons.heart width={18} height={18} />
//                         </div>
//                       </div>
//                     </div>
//                     <div>{`ChanBery, Nita and 41 others`}</div>
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="flex">
//                     <div className="flex mr-3">
//                       <span>{`521 comments`}</span>
//                     </div>
//                     <div className="flex">
//                       <span>{`118 shares`}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mx-4">
//             <div className="relative-flex-row justify-between p-1 border-t border-b border-[rgba(0,0,0,0.2)] min-h-[45px]">
//               {
//                 [
//                   {icon: ReactionIcons.likeOutline, label: "Like"},
//                   {icon: ReactionIcons.commentOutline, label: "Comment"},
//                   {icon: ReactionIcons.shareOutline, label: "Share"},
//                 ].map((item, i) => {

//                   return (
//                     <div key={i} className='hover_menu_section flex items-center justify-center w-full select-none cursor-pointer'>
//                       <div className="flex items-center justify-center text-[var(--secondary-text)]">
//                         <div className="inline-flex">
//                           <span className="mr-2">
//                             <item.icon />
//                           </span>
//                         </div>
//                         <div><span className="text-[15px] font-semibold">{item.label}</span></div>
//                       </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </div>

//           <div>
//             <div className="text-[15px] text-[var(--secondary-text)] font-semibold cursor-pointer hover:underline mx-4 pt-2 select-none">
//               <span>{`View more comments`}</span>
//             </div>
//           </div>

//           <div>
//             <div className="flex pl-4 pt-2">
//               <div className="mr-2">
//                 <div>
//                   <a href="#profile">
//                     <img className="image_circle w-8 h-8" src={avatarIcon} alt="" />
//                   </a>
//                 </div>
//               </div>
//               <div className="relative grow pr-4 overflow-hidden">
//                 <div>
//                   <div className="relative px-2 pt-1 text-[13px] font-semibold">
//                     <a href="#profile">{"Anonymous"}</a>
//                   </div>
//                 </div>
//                 <div className="flex break-words max-w-[calc(100%_-_26px)]">
//                   <div className="mt-2">
//                     <div>
//                       <ReactionIcons.heart width={72} height={72} />
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex text-[13px] text-[var(--secondary-text)] font-semibold min-w-[97px] mt-2">
//                     <div className="mx-2 cursor-pointer hover:underline">
//                       <span><a href="#comment_id">{`4d`}</a></span>
//                     </div>
//                     <div className="mx-2 cursor-pointer hover:underline">
//                       <span>{`Like`}</span>
//                     </div>
//                     <div className="mx-2 cursor-pointer hover:underline">
//                       <span>{`Reply`}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="relative-flex-row p-4 text-[var(--secondary-text)]">
//               <div className='flex items-center text-[15px] grow'>
//                 <a href="#profile" className="relative flex items-center mr-2">
//                   <div className='flex'>
//                     <img className='image_circle w-8 h-8' src={avatar} alt={"Veasna Meta"} />
//                   </div>
//                   <div className="absolute bottom-[-2px] right-[-2px] text-[var(--primary-icon)] bg-[var(--secondary-button-background)] rounded-full z-[1]">
//                     <svg viewBox="0 0 16 16" width={12} height={12} fill="currentColor">
//                       <g fillRule="evenodd" transform="translate(-448 -544)">
//                         <path fillRule="nonzero"
//                           d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z">
//                         </path>
//                       </g>
//                     </svg>
//                   </div>
//                 </a>
//                 <div className='flex items-center justify-start grow min-h-10 rounded-full cursor-pointer bg-[var(--web-bg-color)] hover:hover:bg-[rgba(158,158,158,0.2)]'>
//                   <div className="pl-3 py-2 w-full break-words text-[15px] select-none">
//                     <span>{`Comment as Veasna Meta`}</span>
//                   </div>
//                   <div>
//                     <ul className="flex items-center justify-center min-h-10 mr-1">
//                       {
//                         [
//                           {position: "bg-[center_-1099px]"},
//                           {position: "bg-[center_-1184px]"},
//                           {position: "bg-[center_-1133px]"},
//                           {position: "bg-[center_-1218px]"},
//                           {position: "bg-[center_-1337px]"},
//                         ].map((item, i) => {

//                           return (
//                             <li key={i}>
//                               <div>
//                                 <span>
//                                   <div className="flex items-center justify-center w-[30px] h-[30px] hover:bg-[rgba(158,158,158,0.2)] rounded-full">
//                                     <i className={`relative right-[-5px] opacity-70 bg-position bg-[url('/src/assets/facebook-icon-png-04.png')] ${item.position} w-[30px] h-4`}/>
//                                   </div>
//                                 </span>
//                               </div>
//                             </li>
//                           )
//                         })
//                       }
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }



export default function MainFeed() {
  const mQuery = useMediaQuery();

  return (
    <div id="main-feed" className={'relative-flex-row box-border shrink items-stretch flex-nowrap basis-[744px] min-w-0 px-8 sm-[]'.concat(mQuery > 899 ? " justify-between": " justify-center")}>
      <div className='relative-flex-col box-border shrink-0 min-w-0 max-w-full'>
        <div className='relative box-border'>
          <div className='w-full my-4'>
            <StoryBoard />
            <CreateNewPostSection />
            {
              [...Array(5).keys()].map(_ => postObj).map((v, i) => {
                // v.likeCount = random(i+1)
                const updateVal = {
                  ...v,
                  description:  i/2 === 0 ? postText1 : postText2,
                  likeCount: random(3+i),
                  commentCount: parseInt((random(2+i)/2).toString()),
                  shareCount: parseInt((random(1+i) * 4 / 3).toString()),
                  publishedPostDate: "February " + (random(1) * 3 + 3),
                }
                return <PostSection key={i} dataPost={updateVal}  />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
