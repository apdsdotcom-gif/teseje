
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionContribution from '../components/SectionContribution';
import SectionBlog from '../components/SectionBlog';
import AboutContact from '../components/AboutContact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Balloons from '../components/Balloons';

export default function Page(){
  return(<><Balloons/><Navbar/><Hero/><SectionContribution/><SectionBlog/><AboutContact/><FAQ/><Footer/></>);
}
