import React from 'react'

export default function Index() {
    return <div>
        <h1 id="do-it-yourself-cloud-gaming">Do-it-yourself Cloud Gaming</h1>
        <p>Stadia, Luna, GeForce now? Limited libraries. Plus you have your own on Steam, GOG, etc. Monthly lock-in prices, this solution lets you pay by the hour of play. Read more <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Why-DIY">justification here</a></p>
        <p>This terraform module provisions a gaming PC in AWS. You can then use that for cloud-gaming, both traditional or VR (Quest 2). <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Notes#original-blog-post">Notes: Original blog post</a>.</p>
        <h2 id="on-localhost-mac-pc-whatever-">On localhost (Mac, PC, whatever)</h2>
        <ol>
            <li>Clone this repo, setup AWS. See <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Notes#non-tech-people">Notes: Non-tech people</a></li>
            <li>Install <a href="https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started">Terraform</a>. </li>
            <li>Edit <code>terraform.tfvars</code> with any edits you want. The documentation for all these variables is in <code>variables.tf</code>, read through that!</li>
            <li><code>terraform init; terraform apply</code>. Review the modifications, <code>yes</code>. This will take a long time because it&#39;s waiting for infrastructure &gt; EC2 instance &gt; boot up &gt; password available for decrypt.<ul>
                <li>TODO fix this: first set <code>terraform.tfvars</code> <code>state=&quot;stop&quot;</code>; run <code>terraform apply --auto-approve</code>; then set <code>state=&quot;init&quot;</code>, apply again</li>
            </ul>
            </li>
        </ol>
        <p>It will output your login credentials to your new Windows PC. Use <a href="src/logged_out/about/info">DCV Viewer</a> to log in. Enter the connection info output from Terraform in terminal (IP, Administrator, Password). <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Notes#nicedcv-woes">Note: Nice DCV woes</a></p>
        <h2 id="on-windows-server-through-rdp-">On Windows Server (through RDP)</h2>
        <p>Open <code>Server Manager</code> on Windows</p>
        <ol>
            <li>Disable <a href="https://docs.osisoft.com/bundle/ocs/page/add-organize-data/collect-data/connectors/pi-to-ocs/set-up-pi-to-ocs/disable-ie-security.html#:~:text=In%20the%20Properties%20section%2C%20locate,Select%20OK.">IE enahanced security</a>. <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Notes#ie-enhanced-security">Notes: IE Enhanced Security</a><ol>
                <li>Local Server → Properties → IE Enhanced Security: Administrators=off</li>
            </ol>
            </li>
            <li>Enable &quot;Wireless Lan&quot;. Needed for streaming stuff<ol>
                <li>Add roles and features</li>
                <li>Click through until you get to Features<ol>
                    <li>Checkbox Wireless LAN Service feature</li>
                </ol>
                </li>
                <li>Click Next to move to the end to install the feature</li>
            </ol>
            </li>
            <li>Reboot the EC2 instance in order to complete the installation of the new feature.</li>
            <li>After the reboot, revisit Server Manager → Roles and Features. I think you just need to visit that page and click close, it doesn&#39;t finalize installation until you go back there.</li>
        </ol>
        <p>Download everything; eg Chrome, Steam, etc. Don</p>
        <h2 id="game-streaming-">Game streaming!</h2>
        <p>Now the setup work is done, time to get streaming. <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Streaming-Setup">Read Streaming Setup</a></p>
        <h2 id="when-you-re-done">When you&#39;re done</h2>
        <p>See the output from Terraform terminal, it gives a command to stop your instance. That way you&#39;re not paying for the instance when you&#39;re not using it (free when it&#39;s shut-down). Or you can stop the instance inside Windows Server (Start &gt; Shut Down). Don&#39;t terminate the instance, you&#39;ll lose it! You won&#39;t be charged for shut-down instances in AWS, so just boot it up later when you wanna play.</p>
        <h2 id="without-terraform">Without Terraform</h2>
        <p>If you don&#39;t have a computer to do this from, you can do it all through mobile / whatever. I&#39;ll write instructions later, but I recommend looking through the Terraform files and the original blog post to mind-translate the code steps to manual console.aws.com steps. It&#39;ll be much harder in console, Terraform strings things together that&#39;s not explicit in the code files (eg, Internet Gateway, Route Tables, etc); so if you can use Terraform, please do.</p>
        <h2 id="gotchas">Gotchas</h2>
        <p>If your AWS account is new (eg, you set it up for this), see <a href="https://github.com/ocdevel/diy-cloud-gaming/wiki/Notes#aws-gotchas">Notes: AWS Gotchas</a>. Actually, you may wanna read that anyway.</p>


    </div>
}