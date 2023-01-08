import * as React from "react"
import { Text } from "theme-ui"
const Footer  = ({ post }) => (
    <section>
    <Text sx={{ fontStyle: `italic`, color: `secondary`, a: {color: `secondary`}, fontsize: [1, 1, 2] }}>If you like this post please consider subscribing via the <a href="rss.xml">RSS feed</a> or <a href="http://eepurl.com/ihpvjb">newsletter</a>. You can also leave a comment below -- it would mean a lot to me! <br/> Thanks for reading!</Text>
    </section>
)


export default Footer
