// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'

import bestCourse from "./schemas/bestCourse";
import blogs from "./schemas/blogs";
import courseWeOffer from "./schemas/courseWeOffer";
import header from "./schemas/header";
import imageHeading from "./schemas/imageHeading";
import majorPrograms from "./schemas/majorPrograms";
import ourFacilities from "./schemas/ourFacilities";
import postCatageries from "./schemas/postCatageries";
import studentsSays from "./schemas/studentsSays";
import virtualTour from "./schemas/virtualTour";

export const schema = {
  types: [majorPrograms,virtualTour,ourFacilities,studentsSays,imageHeading,header,courseWeOffer,bestCourse,blogs,postCatageries],
}
