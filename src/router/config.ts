const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/home/rh"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/jobList"],
    exact: true,
    component: "JobList",
  },
  {
    path: ["/", "/huntjobList"],
    exact: true,
    component: "HuntJobList",
  },
  {
    path: ["/", "/talentbank"],
    exact: true,
    component: "TalentBank",
  },
  {
    path: ["/", "/signup"],
    exact: true,
    component: "SignUp",
  },
  {
    path: ["/", "/profile"],
    exact: true,
    component: "Profile",
  },

];

export default routes;
