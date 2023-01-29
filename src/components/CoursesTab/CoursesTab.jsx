import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Tab from './Tab/Tab';
import Course from './Course/Course';
import data from './data.json';

const CoursesTab = props => {
    const { tokenId } = props;
    const [course, setCourse] = useState({});

    const handleClick = index => {
        setCourse(data[index]);
    }

    const handleGoBack = () => {
        setCourse({});
    }

    return(
        <Container maxWidth="lg" className="container-fluid">
            <Grid container>
                {Object.keys(course).length === 0 &&
                    data.map((item, index) =>
                        item.accessLevel.includes(tokenId) &&
                        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
                            <Tab
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                accessLevel={item.accessLevel}
                                onClick={()=>handleClick(index)}
                            />
                        </Grid>
                    )
                }

                {Object.keys(course).length !== 0 &&
                    <Grid xs={12}>
                        <Course course={course} handleGoBack={handleGoBack}/>
                    </Grid>
                }
            </Grid>
        </Container>
    )
}

export default CoursesTab;