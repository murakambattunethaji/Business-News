import React from 'react'

const Header = () => {
    return (
        <div>
            <div class="wrapper col1">
                <div id="header">
                    <div id="logo">
                        <h1><a href="#">BusinessToday</a></h1>
                        <p><strong>Free Website Template</strong></p>
                    </div>
                    <div id="newsletter">
                        <p>Sign up to our newsletter for the latest news, updates and offers.</p>
                        <form action="#" method="post">
                            <fieldset>
                                <legend>NewsLetter</legend>
                                <input type="text" value="Name&hellip;" onfocus="this.value=(this.value=='Name&hellip;')? '' : this.value ;" />
                                <input type="text" value="Email&hellip;" onfocus="this.value=(this.value=='Email&hellip;')? '' : this.value ;" />
                                <input type="submit" name="news_go" id="news_go" value="Sign Up" />
                            </fieldset>
                        </form>
                    </div>
                    <br class="clear" />
                </div>
            </div>










            <div>
                <div class="wrapper col2">
                    <div id="topbar">
                        <div id="topnav">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="pages/style-demo.html">Style Demo</a></li>
                                <li><a href="pages/full-width.html">Full Width</a></li>
                                <li><a href="#">DropDown</a>
                                    <ul>
                                        <li><a href="#">Link 1</a></li>
                                        <li><a href="#">Link 2</a></li>
                                        <li><a href="#">Link 3</a></li>
                                    </ul>
                                </li>
                                <li class="last"><a href="#">A Long Link Text</a></li>
                            </ul>
                        </div>
                        <div id="search">
                            <form action="#" method="post">
                                <fieldset>
                                    <legend>Site Search</legend>
                                    <input type="text" value="Search Our Website&hellip;" onfocus="this.value=(this.value=='Search Our Website&hellip;')? '' : this.value ;" />
                                    <input type="submit" name="go" id="go" value="Search" />
                                </fieldset>
                            </form>
                        </div>
                        <br class="clear" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
