import React,{Component} from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import GetData from "./GetData";

export default class CharacterCards extends Component{
  render(){
    return(
      <div style={{ background: '#f7f7f7', padding: '10px', marginTop: '25px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Films">A Brief History of the Skywalker Saga, along with iconic dialogues to boot
                <Link to="/films"><GetData /></Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="People" bordered={true}>Jedi or Sith? Imperial Troop or Rebel Scum? Filthy Pirate or A Bounty Hunter? Find out
                <GetData />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Planets" bordered={true}>How would a planet with two Suns feel? Or a planet that is a city? What new worlds await discovery? Strap on!!
              <GetData />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ background: '#f7f7f7', marginTop: '25px' }}>
          <Col span={8}>
            <Card title="Species">Interested in exotic alien 'Races' ? Want to 'taste' the galaxy ? Chat up a Wookie ? or gyrate with a sensous twillek ? Well Lets hit hyperspeed!!
              <GetData />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Starships" bordered={true}>An X-Wing or an Imperial Cruiser, or Perhaps a Star Destroyer of the Imperial Navy. You Choose!
              <GetData />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Vehicles" bordered={true}>Imperial Walkers or Giant Lizards, or weird beasts in a bling blizzard?We won't judge
              <GetData />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


/*I just learnt the hard way that without credit card you can have no girl friends or great sex
I am so angry that I am not angry
Or I guess I am not ready yet....Damn...I am cursed...but to evoke fantassises and desires from women is an art
I was correct!! I was correct!! Evolutionary feature need to learn need to learn at all costs....but no credit card no secret knowledge*/

/*
Shock her in a good way!!
Something pleasurable
Pull Back
Create a vivid image(you+icr cream #2)
Getting her to meet up(false choice)
*/
