import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import axios from 'axios';
import sendIcon from '@iconify/icons-bytesize/send';
import { Icon } from '@iconify/react';
import Terminal from 'react-animated-term';
import {Link} from 'gatsby';
// import {SocialMediaIconsReact as Social} from 'social-media-icons-react';
import twitter from '@iconify/icons-logos/twitter';
import stackoverflow from '@iconify/icons-logos/stackoverflow-icon';
import github from '@iconify/icons-logos/github-icon';
import medium from '@iconify/icons-cib/medium';
import centco from '../images/icons/centco.png';
// import bitmojiBeanbag from '../images/bitmoji-beanbag.png';
import bitmojiBye from '../images/bitmoji-bye.png';

const ContactPage = () => {
    const [formData, setFormData] = useState({})

    const termForm = [
        {
          'text' : "Reach Out & Connect!",
          'cmd' : true
        }
    ]



    const submitForm = async (e) => {
        const form = e.target;
        console.log('submitForm triggered');
        e.preventDefault();
        console.log(formData);
        axios.post('https://formspree.io/mrgazpyb',formData)
            .then(res => {
                console.log(res.data);
                form.reset();
                setFormData({});
            })
            .catch(err => console.error(err.response));
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    return (
        <Layout>
            <SEO title="Contact" />
                <div class="bitmoji-form">
                    <img id="bitmoji-bye" src={bitmojiBye} alt="Amir Bitmoji"/>
                    <form onSubmit={submitForm} action="https://formspree.io/mrgazpyb">
                        {/* <label>Reach Out</label> */}
                        <Terminal lines={termForm} interval={70} />
                        <input name="name" type="text" placeholder="Name" onChange={handleChange}/>
                        <input name="email" type="email" placeholder="email" type="email" onChange={handleChange}/>
                        <textarea name="message" type="message" placeholder="message" onChange={handleChange} />
                        <button type="submit"><Icon icon={sendIcon} width="30" color="white"/></button>
                    </form>
                </div>
            
            <section class="social-media">
                <a href="http://www.twitter.com/amiryunas" target="_blank"><Icon icon={twitter} width={75}/>
                <p class="info-box">Twitter</p>
                </a>
                
                <a href="https://stackoverflow.com/users/8161309/amir-yunas" target="_blank"><Icon icon={stackoverflow} width={75}/>
                 <p class="info-box">Stackoverflow</p>
                </a>
                <a href="http://www.github.com/ayunas" target="_blank"><Icon icon={github} width={75}/>
                 <p class="info-box">Github</p>
                </a>
                <a href="https://medium.com/@amiryunas" target="_blank"><Icon icon={medium} width={75} color="black" />
                 <p class="info-box">Medium</p>
                </a>
                <a href="https://beta.cent.co/@ayunas" target="_blank"><img src={centco} style={{width : '7.5rem'}}/>
                 <p class="info-box">Cent.co</p>
                </a>
            </section>
        </Layout>
    )
}

export default ContactPage;