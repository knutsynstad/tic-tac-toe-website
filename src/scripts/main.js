import * as d3 from 'd3';
import { initTickMarks, updateTickMarks } from './tickMarks';
import initAboutModal from './aboutModal';
import initAccordion from './accordion';
import initialPosition from './initialPosition';

const xOffset = 15;
const yOffset = initialPosition();


const zoom = d3.zoom()
  .scaleExtent([0.3, 3])
  .on('zoom', zoomed);

function zoomed() {
  const transform = d3.zoomTransform(this);
  container.attr('transform', transform);
  updateTickMarks(transform);
}

const svg = d3.select('main svg');

const container = svg.select('g')
  .attr('transform', `translate(${xOffset}, ${yOffset}) scale(1)`);

svg.call(zoom)
  .call(zoom.transform, d3.zoomIdentity.translate(xOffset, yOffset).scale(1));

initAboutModal();
initAccordion();
initTickMarks();
