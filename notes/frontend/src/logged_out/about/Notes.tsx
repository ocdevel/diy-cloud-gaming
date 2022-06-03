import React from 'react'

export default function Note() {
    return <div>
        <h2 id="original-blog-post">Original blog post</h2>
        <p>I started this based on following this <a
            href="src/logged_out/about/Notes">AWS guide</a>, which
            worked! But had some problems. So I figured I&#39;d make a project to make it easier, with updated notes for a
            better setup. So use my guide instead.</p>
        <p>I got the above solution working and I love it; later I&#39;m going to try another AWS solution, <a
            href="https://aws.amazon.com/blogs/architecture/field-notes-streaming-vr-to-wireless-headsets-using-nvidia-cloudxr/Notes.tsx">GeForce
            CloudXR server</a>. Even more techie, it requires developer accounts for Nvidia, Oculus, and some manual
            PC-&gt;Quest USB file installations. But it might be even faster for streaming.</p>
        <h2 id="non-tech-people">Non-tech people</h2>
        <p>Notes for first-timers to Git, AWS, etc. Follow below if this isn&#39;t obvious stuff to you.</p>
        <h3 id="git">Git</h3>
        <p><a href="src/logged_out/about/Notes">Download VSCode</a>. Create a new project from Github,
            use <code>https://github.com/ocdevel/diy-cloud-gaming.git</code>. I think VSCode will handle all the Git stuff for
            you so you don&#39;t need to learn anything.</p>
        <p>If not, <a
            href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository">follow
            these docs</a> (and let me know so I can update this section).</p>
        <h3 id="aws">AWS</h3>
        <p>Setup <a href="src/logged_out/about/Notes">AWS</a>. </p>
        <ol>
            <li>Create account, enter credit card, etc. <a
                href="https://docs.aws.amazon.com/accounts/latest/reference/root-user-mfa.html">Activate MFA</a> on the root
                account! If this account gets hacked, crypto miners will drain your bank account. Trust me, it&#39;s really
                serious.
            </li>
            <li><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html">Create a
                new IAM user</a> inside AWS, never use your root account for development stuff. Call it <code>admin</code> or
                whatever. Give it <code>AdministratorAccess</code>. Probably wanna add MFA to this guy too.
            </li>
            <li>Inside VSCode&#39;s Terminal, install <a href="src/logged_out/about/Notes">aws-cli</a>. <a
                href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Generate access
                keys</a> for your <code>admin</code> user. Copy those permissions in to <code>aws configure</code>.
            </li>
            <li>If someone can figure out the minimal permissions needed for deploying this Terraform project
                (aka, <code>AdministratorAccess</code> is too elevated - that&#39;s insecure), please let me know in a Github
                ticket.
            </li>
        </ol>
        <h2 id="nicedcv-woes">NiceDCV woes</h2>
        <p><a href="src/logged_out/about/Notes">NiceDCV</a> a remote desktop protocol for high-performance computing (eg
            gaming), built by AWS. It&#39;s a &quot;competitor&quot; to Parsec, and I recommend the latter for your actual
            gaming, because DCV has <em>lots</em> of bugs. I find the mouse is a pain to work with. They have &quot;relative
            mouse position&quot; option in DCV, but I can&#39;t get it working. The display resolution never sticks, so
            you&#39;ll often find yourself scrolling the app window side/bottom bars to access Windows features.</p>
        <p>Unfortunately you&#39;re stuck with DCV until you get everything setup, because Oculus looks for Remote Desktop
            and refuses to install if you&#39;re using it (to prevent projects like this). So use DCV just for setup, then
            Virtual Desktop or Parsec for actual gaming.</p>
        <h2 id="ie-enhanced-security">IE Enhanced Security</h2>
        <p>Windows Server comes with IE Enahanced Security turned on by default. This prevents you from literally using
            Internet Explorer in any way shape or form. The moment you Google something, good luck even closing the window -
            it&#39;s insane.</p>
        <p>Well we&#39;re not gonna even use IE anyway, except to download Chrome so we can download other things (Steam,
            Parsec, Oculus, etc). So we want to tell Windows to let us into IE, so we can download Chrome, and we&#39;ll never
            look at IE again. For that reason, don&#39;t worry about the fact you&#39;re disabling enhanced security. Hell,
            you can turn it back on after you get things setup if you care.</p>
        <h2 id="aws-gotchas">AWS Gotchas</h2>
        <h3 id="g-v-instances">G/V Instances</h3>
        <p>AWS limits new accounts&#39; available EC2 instance types. In our case we want <code>g5.2xlarge</code>. If
            you&#39;ve been using AWS for a while, you&#39;re probably fine. If you signed up for AWS just for this, you
            won&#39;t be able to use this project until you&#39;ve hopped on a call with AWS and begged them to let you
            use <code>G/V Instance</code>.</p>
        <p><strong>On Demand Instances</strong></p>
        <ol>
            <li>Log into <a href="src/logged_out/about/Notes">AWS Console</a>.</li>
            <li>Seach or &quot;Service Quotas&quot;. Make sure you&#39;re in the region you&#39;ll be running your PC!
                Top-right will say <code>N. Virginia</code> or something, click it and select your region (eg
                I&#39;m <code>us-west-2</code>)
            </li>
            <li>&quot;Amazon Elastic Compute Cloud (Amazon EC2)&quot;</li>
            <li>Search for &quot;Running On-Demand G and VT instances&quot;</li>
            <li>&quot;Request quota increase&quot;</li>
            <li>Enter <code>1</code> if you only want this for yourself, or another number if you might take snapshots and
                share accounts with friends. Keep this low though, <code>1</code> is the most likely to get you approved!
            </li>
            <li>If sales contacts you and asks what you want, tell them <code>g5.2xlarge</code> in <code>your-region</code>
            </li>
        </ol>
        <p>If you want the above, but cheaper, there&#39;s something called Spot Instances. These let
            you &quot;borrow&quot; an instance that&#39;s not being used like it should, for as low as 10% of the On Demand
            price. BUT, if that person comes back to reclaim their instance, you get booted out. It&#39;s like couch-surfing /
            house-sitting at someone&#39;s mansion, and they may boot you if their business trip ended early. Risky for
            gaming, but it&#39;s actually kind of rare and well worth the price IMO. But you&#39;ll need to request Spot
            Instance Quota Increase, similar to the above steps for On Demand instances. </p>
        <p><strong>Spot Instances</strong></p>
        <ol>
            <li>Seach or &quot;Service Quotas&quot;. Make sure you&#39;re in the region you&#39;ll be running your PC!
                Top-right will say <code>N. Virginia</code> or something, click it and select your region (eg
                I&#39;m <code>us-west-2</code>)
            </li>
            <li>&quot;Amazon Elastic Compute Cloud (Amazon EC2)&quot;</li>
            <li>&quot;All G and VT Spot Instance Requests&quot;</li>
            <li>You know the rest.</li>
        </ol>
        <h3 id="ebs-costs">EBS Costs</h3>
        <p>Even though you&#39;re not charged for stopped EC2 instances, you <em>are</em> charged for the disk (EBS) that
            saves the files. I was charged $3/day for 512GB, if I recall. I need to get something setup so you can take an AMI
            snapshot and restore from that snapshot in the future. It would take longer to boot up / shut down, but it could
            save lots of money.</p>

    </div>
}