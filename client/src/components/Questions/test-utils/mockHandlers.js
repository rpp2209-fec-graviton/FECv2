import { rest } from 'msw';
import SampleData from "../../../../ExampleData/index.js";

const hostPath = window.location.host;

export const mswQuestionServer = setupSErver(...handlers);