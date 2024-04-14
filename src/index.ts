import figlet from "figlet"
import standard from "figlet/importable-fonts/Standard"
import { Hono } from 'hono'

type Bindings = {
  ENV: string;
};

const app = new Hono<{ Bindings: Bindings }>()

figlet.parseFont("Standard", standard);

app.get('/', (c) => {
const body = figlet.textSync(`Bun from ${c.env.ENV} deployed by GitHub Actions!`);
  return c.text(body)
})

export default app
