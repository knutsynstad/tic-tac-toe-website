import * as d3 from 'd3';
import updateTickMarks from './tickMarks';
import initAboutModal from './aboutModal';
import initAccordion from './accordion';

const zoom = d3.zoom()
  .scaleExtent([0.3, 3])
  .on('zoom', zoomed);

function zoomed() {
  const transform = d3.zoomTransform(this);
  container.attr('transform', transform);
  updateTickMarks(transform);
}

const svg = d3.select('#root')
  .call(zoom);

const container = svg.select('g');

initAboutModal();
initAccordion();
