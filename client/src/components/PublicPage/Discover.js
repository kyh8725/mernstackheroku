import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Discover() {
  return (
    <>
      <div className="project__title-wrap">
        <h1 className="project__title">Discover Your Sportscar</h1>
      </div>
      <section className="discover">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/m3-sedan/2020/overview/bmw-3-series-sedan-m-automobiles-wide-teaser-3-series-sedan.jpg/_jcr_content/renditions/cq5dam.resized.img.500.low.time1597748917234.jpg"
          />
          <Card.Body>
            <Card.Title>Current Offers</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              suscipit omnis blanditiis inventore adipisci molestias, neque
              dignissimos quam. Iure necessitatibus neque natus tenetur illum
              accusantium iste quis eos esse minima.
            </Card.Text>
            <Button variant="outline-secondary">View Special Offers</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.infiniti.ca/content/dam/Infiniti/Canada/vehicles/Q60/2020/overview/2020-infiniti-q60-overview-direct-adaptative-steering.jpg.ximg.l_4_m.smart.jpg"
          />
          <Card.Body>
            <Card.Title>Certified Pre-Owned</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              sunt eos. Quasi sequi, facilis error eveniet laudantium, autem hic
              odit dolor quisquam iure unde. Rem quia vel exercitationem
              recusandae velit!
            </Card.Text>
            <a
              href="https://www.autotrader.ca/?prv=British+Columbia&r=9&rprv=True&loc=British+Columbia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary">Find Yours</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/top_level/home/lexus-home-2020-we-are-here-for-you-m.jpg?ck=10262020014332"
          />
          <Card.Body>
            <Card.Title>Financial Services</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tenetur expedita temporibus consequatur explicabo? Perspiciatis
              blanditiis eligendi vero iure libero. Nesciunt omnis cum
              asperiores, quos ratione obcaecati ullam sunt perspiciatis?
            </Card.Text>
            <Button variant="outline-secondary">Learn More</Button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}
