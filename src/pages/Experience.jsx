import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import School from '@material-ui/icons/School'
import Work from '@material-ui/icons/Work'
function Experience() {
  return (
    <>
      <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date="2018 - 2019"
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            St. Mary's Orthodox School, Kanpur, Uttar Pradesh
          </h3>
          <p>High School</p>
        </VerticalTimelineElement>
       
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date="2020 - 2021"
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            New Kingston Senior Secondary School
          </h3>
          <p>Intermediate</p>
        </VerticalTimelineElement>
        
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date="2021 - 2025"
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Technology (B.Tech)
          </h3>
          
          <h4 className='vertical-timeline-element-title'>
          Bachelor's Degree
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date="2023 - 2023 (12 weeks)"
          iconStyle={{background:"#e9d35b", color:"#fff"}}
          icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Industry Academia Community
          </h3>
          <p>Web Development Intern</p>
        </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date="2023 - 2023 (1 month)"
          iconStyle={{background:"#e9d35b", color:"#fff"}}
          icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>
            CodSoft
          </h3>
          <p>Web Development Intern</p>
        </VerticalTimelineElement></VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
