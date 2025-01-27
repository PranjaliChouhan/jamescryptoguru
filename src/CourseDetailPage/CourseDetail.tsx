import { IEnrolledCourse, ITab, Tabs } from "@/Constant/constant";
import {
  BigBriefCase,
  BigEnrolledIcon,
  BigRatingIcon,
  Clock,
  FaqArrow,
  ThinArrow,
} from "@/components/Icons/Icons";
import { FormBtnStyles } from "@/styles/ContactpageStyles/Contact";
import {
  BoldXtraSmallStyles,
  CourseDetailCompStyles,
  DetailH3Styles,
  DetailHeadStyles,
  DetailNavSwitchStyles,
  DetailSmallStyles,
  DrawerHeadStyles,
  DrawerStyles,
  HeightControlStyles,
  ListCompStyles,
  MainCardStyles,
  OverviewStyles,
  RegularSmallStyles,
  RequirementStyles,
  ReviewListStyle,
  ReviewStyles,
  SideCardStyles,
  SyllabusStyles,
  TutorHeadStyle,
  TutorListStyle,
  TutorsStyles,
  VideoStyles,
} from "@/styles/CoursepageStyles/CourseDetail";
import { ImprovedDesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import Image from "next/image";
import Link from "next/link";
import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  FavEmojiButton,
  IModule,
  IReview,
  ITutor,
} from "@/components/CourseCard/CourseCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { convertToNaira } from "@/components/Info/Wishlist";
import {
  getCourseById,
  getCourseByName,
  setShowPaymentModaL,
  setShowTryFreeModaL,
} from "@/redux/dataSlice";
import {
  faqAnswerVariants,
  msgVariants,
} from "@/Animations/LandingPageVariants";
import ReactPlayer from "react-player";
import { ErrorMsg } from "@/components/Coursepage/Error";
import { PageErrorStyles } from "@/styles/HomepageStyles/Error";
import { Loader, Payment } from "@/components/Payments/Payments";
import { TransparentFormBtnStyles } from "@/styles/ButtonStyles/ButtonGroup";

export interface IPaymentFunc {
  value: boolean;
}
export const CourseDetailComp = () => {
  const [tabs, setTabs] = useState(Tabs);
  const router = useRouter();
  const { allCourses, course, user, showPaymentModal, showTryFreeModal } =
    useAppSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const courseId = router.query.id;
    if (courseId) {
      dispatch(getCourseById(courseId));
    } else {
      dispatch(getCourseByName(router.query.name));
    }
  }, [allCourses, dispatch, router.query]);
  const [isheartHovered, setIsheartHovered] = useState(false);
  const openTab = tabs.find((ele) => ele.isSelected === true);

  const handleClickPayments = (value: boolean) => {
    dispatch(setShowPaymentModaL(value));
  };
  const userCourse = user?.enrolledCourses?.find(
    (ele) => ele.courseId === course?.id
  );
  const handleClickTryFree = (value: boolean) => {
    dispatch(setShowTryFreeModaL(value));
  };

  return (
    <>
      {course && (
        <ImprovedDesktopMobile>
          <CourseDetailCompStyles>
            <MainCardStyles>
              <VideoComp url={course.introVideo} />
              <div className="name">
                <DetailH3Styles>{course.name}</DetailH3Styles>
                <div className="mobile emojix">
                  <motion.div
                    className="msg"
                    variants={msgVariants}
                    initial="initial"
                    animate={isheartHovered ? "final" : "exit"}
                  >
                    <span>
                      {course.isLoved ? "Added to Wishlist" : "Add to Wishlist"}
                    </span>
                  </motion.div>
                  <FavEmojiButton
                    isLoved={course.isLoved}
                    name={course.name}
                    isheartHovered={isheartHovered}
                    setIsheartHovered={setIsheartHovered}
                  />
                </div>
                <div className="minitab emojix">
                  <motion.div
                    className="msg"
                    variants={msgVariants}
                    initial="initial"
                    animate={isheartHovered ? "final" : "exit"}
                  >
                    <span>
                      {course.isLoved ? "Added to Wishlist" : "Add to Wishlist"}
                    </span>
                  </motion.div>
                  <FavEmojiButton
                    isLoved={course.isLoved}
                    name={course.name}
                    isheartHovered={isheartHovered}
                    setIsheartHovered={setIsheartHovered}
                  />
                </div>
              </div>
              <div className="details">
                <div className="deets">
                  <div className="deet-one">
                    <div className="deet-ele">
                      <BigBriefCase />
                      <DetailSmallStyles>{course.level}</DetailSmallStyles>
                    </div>
                    <div className="deet-ele">
                      <Clock />
                      <DetailSmallStyles>
                        {course.duration} months
                      </DetailSmallStyles>
                    </div>
                  </div>
                  <div className="deet-one">
                    <div className="deet-ele">
                      <BigEnrolledIcon />
                      <DetailSmallStyles>
                        {" "}
                        {course.noEnrolled} students
                      </DetailSmallStyles>
                    </div>
                    <div className="deet-ele">
                      <BigRatingIcon />
                      <DetailSmallStyles>
                        {course.rating} ({course.totalReviews} Reviews)
                      </DetailSmallStyles>
                    </div>
                  </div>
                  <div className="mobile">
                    {!userCourse?.isPaid && <></>}
                    <div className="btns">
                      <FormBtnStyles
                     
                        disabled={userCourse?.isPaid}
                      >
                        {/* {userCourse?.isPaid ? (
                          <>Subscribed</>
                        ) : (
                          <>Subscribe Now</>
                        )} */}
                         Learn and Grow
                      </FormBtnStyles>
                      {!userCourse?.isPaid && (
                        <>
                          <TransparentFormBtnStyles
                            onClick={() => handleClickTryFree(true)}
                            disabled={userCourse?.isFree}
                          >
                            {userCourse?.isFree ? (
                              <>Enrolled in Free Trial!</>
                            ) : (
                              <> </>
                            )}
                          </TransparentFormBtnStyles>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="minitab">
                  {!userCourse?.isPaid && (
                    <>
                      <div className="discount">
                        <RegularSmallStyles color="#525252">
                          Got a discount code, click{" "}
                          <Link href="#" className="link">
                            here
                          </Link>
                        </RegularSmallStyles>
                      </div>
                      <div className="prices">
                        <h6>
                          &#8358;
                          {course.nairaPrice === null
                            ? convertToNaira(
                                course.dollarPrice
                              ).toLocaleString()
                            : course.nairaPrice.toLocaleString()}
                        </h6>
                        <DetailSmallStyles>
                          approx ${course.dollarPrice}
                        </DetailSmallStyles>
                      </div>
                    </>
                  )}
                  <div className="btns">
                    <FormBtnStyles
                     
                      disabled={userCourse?.isPaid}
                    >
                      {/* {userCourse?.isPaid ? (
                        <>Subscribed</>
                      ) : (
                        <>Subscribe Now</>
                      )} */}
                      Learn and Grow
                    </FormBtnStyles>
                    {!userCourse?.isPaid && (
                      <>
                        <TransparentFormBtnStyles
                          onClick={() => handleClickTryFree(true)}
                          disabled={userCourse?.isFree}
                        >
                          {userCourse?.isFree ? (
                            <>Enrolled in Free Trial!</>
                          ) : (
                            <> </>
                          )}
                        </TransparentFormBtnStyles>
                      </>
                    )}
                  </div>
                </div>
                <div className="desktop nav-switch-cont">
                  <div className="details-nav-switch">
                    {tabs.map((ele, index) => (
                      <DetailNavSwitch
                        key={index}
                        setTabs={setTabs}
                        tabs={tabs}
                        name={ele.name}
                        isSelected={ele.isSelected}
                        num={ele.num}
                      />
                    ))}
                  </div>
                </div>
                <div className="desktop">
                  <div className="switch-elements">
                    {openTab?.num === 0 && (
                      <Overview skills={course.skills} about={course.desc} />
                    )}
                    {openTab?.num === 1 && (
                      <Syllabus syllabus={course.syllabus} />
                    )}
                    {openTab?.num === 2 && (
                      <Requirement list={course.requirements} />
                    )}
                    {openTab?.num === 3 && <Quiz />}
                    {openTab?.num === 4 && (
                      <Reviews reviewList={course.reviews} />
                    )}
                  </div>
                </div>
                <div className="mobile">
                  <div className="switch-elements-mobile">
                    <Drawer sometext="About This Course" defaultOpen={true}>
                      <div className=""></div>
                      <DetailSmallStyles color="var(--grey-400, #747474)">
                        {course.desc}
                      </DetailSmallStyles>
                      <DetailHeadStyles>Skills you’ll learn</DetailHeadStyles>
                      <ListComp list={course.skills} />
                    </Drawer>
                    <Drawer sometext="Syllabus" defaultOpen={false}>
                      <div className=""></div>
                      {course.syllabus.map((ele, index) => (
                        <Drawer
                          sometext={`Module ${ele.number}: ${ele.title}`}
                          key={index}
                          defaultOpen={ele.number === 1}
                          isMobile={true}
                        >
                          <ListComp list={ele.topics} />
                        </Drawer>
                      ))}
                    </Drawer>
                    <Drawer sometext="Requirements" defaultOpen={false}>
                      <div className=""></div>
                      <ListComp list={course.requirements} />
                    </Drawer>

                    {/* finish the tutors and reviews later */}
                    <Drawer sometext="Quiz" defaultOpen={false}>
                      <div className=""></div>
                      <Quiz />
                    </Drawer>
                    <Drawer sometext="Reviews" defaultOpen={false}>
                      <div className=""></div>
                      <ReviewList reviewList={course.reviews} />
                    </Drawer>
                  </div>
                </div>
              </div>
            </MainCardStyles>
            <div className="desktop side">
              <SideCard
                name={course.name}
                nairaPrice={
                  course.nairaPrice === null
                    ? convertToNaira(course.dollarPrice)
                    : course.nairaPrice
                }
                dollarPrice={course.dollarPrice}
                img={course.img}
                level={course.level}
                isLoved={course.isLoved}
                handleMakePayments={() => handleClickPayments(true)}
                handleTryFree={() => handleClickTryFree(true)}
                userCourse={userCourse}
              />
            </div>
          </CourseDetailCompStyles>
        </ImprovedDesktopMobile>
      )}
      {!course && (
        <PageErrorStyles>
          <ErrorMsg errormsg={`No Match Found | ${router.query.name}`} />
        </PageErrorStyles>
      )}
      <AnimatePresence>
        {showPaymentModal && <Payment isFreeTrial={false} />}
        {showTryFreeModal && <Payment isFreeTrial={true} />}
      </AnimatePresence>
    </>
  );
};

interface IVideo {
  url: string | JSX.Element;
}

export const VideoComp: React.FC<{ url: string | JSX.Element }> = ({ url }) => {
  const [isLoading, setLoading] = useState(true)

  const handleReady = () => {
    setLoading(false)
  }

  return (
    <ImprovedDesktopMobile>
      <VideoStyles $isLoading={isLoading}>
        {isLoading && (
          <div className="">
            {/* <Loader size="small" /> */}
            {/* <TutorHeadStyle>Loading...</TutorHeadStyle> */}
          </div>
        )}
        <TabOnly>
          <div className="desktop">
            {typeof url === "string" ? (
              <ReactPlayer
                width="100%"
                height="100%"
                url={url}
                onReady={handleReady}
                config={{
                  vimeo: {
                    playerOptions: {
                      responsive: true,
                      aspectRatio: "16:9",
                    },
                  },
                }}
              />
            ) : (
              url
            )}
          </div>
          <div className="tab">
            {typeof url === "string" ? (
              <ReactPlayer
                width="100%"
                height="100%"
                url={url}
                onReady={handleReady}
                config={{
                  vimeo: {
                    playerOptions: {
                      responsive: true,
                      aspectRatio: "16:9",
                    },
                  },
                }}
              />
            ) : (
              url
            )}
          </div>
        </TabOnly>
        <div className="mobile">
          {typeof url === "string" ? (
            <ReactPlayer
              width="100%"
              height="100%"
              url={url}
              onReady={handleReady}
              config={{
                vimeo: {
                  playerOptions: {
                    responsive: true,
                    aspectRatio: "16:9",
                  },
                },
              }}
            />
          ) : (
            url
          )}
        </div>
      </VideoStyles>
    </ImprovedDesktopMobile>
  )
}




export interface ISideCard {
  img: string;
  name: string;
  nairaPrice: number;
  dollarPrice: number;
  level: string;
  isLoved: boolean;
  handleMakePayments: (value: boolean) => void;
  handleTryFree: (value: boolean) => void;
  userCourse: IEnrolledCourse | undefined;
}
export const SideCard: FunctionComponent<ISideCard> = ({
  name,
  nairaPrice,
  dollarPrice,
  img,
  isLoved,
  level,
  handleMakePayments,
  handleTryFree,
  userCourse,
}) => {
  const [isheartHovered, setIsheartHovered] = useState(false);
  return (
    <SideCardStyles $isEnrollBtnDisabled={userCourse?.isPaid}>
      <Image alt={name} src={img} width={0} height={0} sizes="100vw" />
      <div className="name">
        <div className="inner">
          <div className="name-r">
            <DetailH3Styles>{name}</DetailH3Styles>
          </div>
          <div className="like">
            <motion.div
              className="msg"
              variants={msgVariants}
              initial="initial"
              animate={isheartHovered ? "final" : "exit"}
            >
              <span>{isLoved ? "Added to Wishlist" : "Add to Wishlist"}</span>
            </motion.div>
            <FavEmojiButton
              isLoved={isLoved}
              name={name}
              isheartHovered={isheartHovered}
              setIsheartHovered={setIsheartHovered}
            />
          </div>
        </div>
        <div className="deet-ele">
          <BigBriefCase />
          <DetailSmallStyles>{level}</DetailSmallStyles>
        </div>
      </div>

      <div className="btns">
        <FormBtnStyles
          
          disabled={userCourse?.isPaid}
        >
          {/* {userCourse?.isPaid ? <>Subscribed</> : <>Subscribe Now</>} */}
          Learn and Grow
        </FormBtnStyles>
        {!userCourse?.isPaid && <></>}
      </div>
    </SideCardStyles>
  );
};

interface ITabSwitch extends ITab {
  tabs: ITab[];
  setTabs: Dispatch<SetStateAction<ITab[]>>;
}
export const DetailNavSwitch: FunctionComponent<ITabSwitch> = ({
  name,
  isSelected,
  num,
  tabs,
  setTabs,
}) => {
  const handleSwitchTab = () => {
    const newTabs = tabs.map((ele) => {
      if (ele.num === num) {
        return { ...ele, isSelected: true };
      } else {
        return { ...ele, isSelected: false };
      }
    });
    setTabs(newTabs);
  };
  return (
    <DetailNavSwitchStyles onClick={handleSwitchTab} $isSelected={isSelected}>
      <p>{name}</p>
      {isSelected && (
        <motion.div className="underline" layoutId="underline"></motion.div>
      )}
    </DetailNavSwitchStyles>
  );
};

interface IOverview {
  skills: string[];
  about: string;
}
export const Overview: FunctionComponent<IOverview> = ({ about, skills }) => {
  return (
    <HeightControlStyles>
      <OverviewStyles>
        <div className="one">
          <DetailHeadStyles>About This Course</DetailHeadStyles>
          <div className="under">
            <DetailSmallStyles color="var(--grey-400, #747474)">
              {about}
            </DetailSmallStyles>
          </div>
        </div>
        <div className="one">
          <DetailHeadStyles>Skills you’ll learn</DetailHeadStyles>
          <ul className="skills">
            {skills.map((ele, index) => (
              <div className="li" key={index}>
                <li>
                  <DetailSmallStyles color="var(--grey-400, #747474)">
                    {ele}
                  </DetailSmallStyles>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </OverviewStyles>
    </HeightControlStyles>
  );
};

interface IListComp {
  list: string[];
}
export const ListComp: FunctionComponent<IListComp> = ({ list }) => {
  return (
    <ListCompStyles>
      {list.map((ele, index) => (
        <div className="li" key={index}>
          <li>
            <DetailSmallStyles color="var(--grey-400, #747474)">
              {ele}
            </DetailSmallStyles>
          </li>
        </div>
      ))}
    </ListCompStyles>
  );
};

interface ISyllabus {
  syllabus: IModule[];
}
export const Syllabus: FunctionComponent<ISyllabus> = ({ syllabus }) => {
  return (
    <HeightControlStyles>
      <SyllabusStyles>
        <DetailHeadStyles>Syllabus</DetailHeadStyles>
        {syllabus.map((ele, index) => (
          <Drawer
            sometext={`Module ${ele.number}: ${ele.title}`}
            key={index}
            defaultOpen={ele.number === 1}
          >
            <ListComp list={ele.topics} />
          </Drawer>
        ))}
      </SyllabusStyles>
    </HeightControlStyles>
  );
};

export const Requirement: FunctionComponent<IListComp> = ({ list }) => {
  return (
    <HeightControlStyles>
      <RequirementStyles>
        <DetailHeadStyles>Requirements</DetailHeadStyles>
        <ListComp list={list} />
      </RequirementStyles>
    </HeightControlStyles>
  );
};

// finish the tutors and reviews later
// export const Tutors: FunctionComponent<ITutorList> = ({ tutorlist }) => {
//   return (
//     <HeightControlStyles>
//       <TutorsStyles>
//         <DetailHeadStyles>Tutors</DetailHeadStyles>
//         <TutorList tutorlist={tutorlist} />
//       </TutorsStyles>
//     </HeightControlStyles>
//   );
// };

// interface ITutorList {
//   tutorlist: ITutor[];
// }
// export const TutorList: FunctionComponent<ITutorList> = ({ tutorlist }) => {
//   return (
//     <TutorListStyle>
//       {tutorlist.map((ele, index) => (
//         <div className="tutor" key={index}>
//           <Image alt={ele.name} src={ele.img} width={88} height={88} />
//           <div className="tutor-deet">
//             <TutorHeadStyle>{ele.name}</TutorHeadStyle>
//             <span>{ele.job}</span>
//             <TutorHeadStyle fontWeight={400} fontSize="0.875rem">
//               {ele.email}
//             </TutorHeadStyle>
//           </div>
//         </div>
//       ))}
//     </TutorListStyle>
//   );
// };

export const Reviews: FunctionComponent<IReviewList> = ({ reviewList }) => {
  return (
    <HeightControlStyles>
      <ReviewStyles>
        <DetailHeadStyles>Reviews</DetailHeadStyles>
        <ReviewList reviewList={reviewList} />
      </ReviewStyles>
    </HeightControlStyles>
  );
};

interface IReviewList {
  reviewList: IReview[];
}
export const ReviewList: FunctionComponent<IReviewList> = ({ reviewList }) => {
  return (
    <ReviewListStyle>
      {reviewList.map((ele, index) => (
        <div className="review" key={index}>
          <Image alt={ele.name} src={ele.img} width={48} height={48} />
          <div className="review-deet">
            <TutorHeadStyle>{ele.name}</TutorHeadStyle>
            <span>{ele.post}</span>
            <TutorHeadStyle
              fontWeight={400}
              fontSize="0.875rem"
              color="var(--grey-400, #747474)"
            >
              {ele.review}
            </TutorHeadStyle>
            <div className="icons">
              <div className="like"></div>
              <div className="comment"></div>
            </div>
          </div>
        </div>
      ))}
    </ReviewListStyle>
  );
};
export interface IDrawer {
  sometext: string;
  children: ReactNode;
  defaultOpen?: boolean;
  isMobile?: boolean;
}
export const Drawer: FunctionComponent<IDrawer> = ({
  sometext,
  children,
  defaultOpen,
  isMobile,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    if (defaultOpen) {
      setShowDetail(defaultOpen);
    }
  }, [defaultOpen]);
  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <DrawerStyles>
      <div className="drawer-control" onClick={handleClick}>
        <DrawerHeadStyles
          color="var(--grey-500, #525252)"
          fontWeight={isMobile ? 400 : 700}
        >
          {sometext}
        </DrawerHeadStyles>
        {!isMobile && <FaqArrow $showAnswer={showDetail} />}
        {isMobile && <ThinArrow $showAnswer={showDetail} />}
      </div>
      <div className="mom">
        <AnimatePresence>
          {showDetail && (
            <motion.div
              className="children"
              variants={faqAnswerVariants}
              initial="initial"
              animate="final"
              exit="exit"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DrawerStyles>
  );
};

interface IQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct answer
}

const quizQuestions: IQuizQuestion[] = [
  {
    question: "What is the primary purpose of UI design?",
    options: [
      "To create user interfaces",
      "To conduct user research",
      "To develop backend systems",
      "To write code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which tool is commonly used for wireframing?",
    options: ["Photoshop", "Figma", "Excel", "Word"],
    correctAnswer: 1,
  },
  {
    question: "What does UX stand for?",
    options: [
      "User Experience",
      "User Exchange",
      "User Execution",
      "User Example",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a prototyping tool?",
    options: ["Adobe XD", "Microsoft Word", "Google Sheets", "Slack"],
    correctAnswer: 0,
  },
  {
    question: "What is the focus of interaction design?",
    options: [
      "Visual aesthetics",
      "User interactions",
      "Database management",
      "Network security",
    ],
    correctAnswer: 1,
  },
];

export const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<number[]>(
    new Array(quizQuestions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Quiz</h2>
          {quizQuestions.map((question, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {question.question}
              </h3>
              <div className="space-y-2">
                {question.options.map((option, i) => (
                  <label
                    key={i}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      checked={userAnswers[index] === i}
                      onChange={() => handleAnswerChange(index, i)}
                      className="form-radio"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {showResults && (
                <p
                  className={`mt-2 ${
                    userAnswers[index] === question.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {userAnswers[index] === question.correctAnswer
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${
                        question.options[question.correctAnswer]
                      }`}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="px-6 pb-6">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Answers
            </button>
          ) : (
            <div className="text-center">
              <p className="text-xl font-bold mb-2">
                Your Score: {calculateScore()} / {quizQuestions.length}
              </p>
              <button
                onClick={() => {
                  setShowResults(false);
                  setUserAnswers(new Array(quizQuestions.length).fill(-1));
                }}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
