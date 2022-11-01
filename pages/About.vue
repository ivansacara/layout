<template>
  <div class="about-page">
    <PageHeading />
      <div class="about-page__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante non felis consequat suscipit. Curabitur suscipit venenatis augue nec tincidunt. Duis cursus feugiat rhoncus. Proin ac diam eleifend, pulvinar sapien eget, consequat arcu. Mauris porttitor massa in mi dignissim facilisis.
          Aenean congue libero malesuada risus molestie, vitae interdum orci tincidunt. Nam vitae mollis nibh, ut sagittis eros.
          Quisque quis interdum tortor. Sed efficitur sed orci non molestie. Proin venenatis in eros et mollis. Cras lacinia risus nec mauris egestas dictum. Donec dictum, elit ut tincidunt iaculis, ante tortor sollicitudin nibh, ut imperdiet dui ligula non elit. Sed lacinia tellus turpis, quis fringilla quam feugiat quis.
        </p>
        <p>
          Nulla in sapien a massa eleifend facilisis pulvinar et risus. Aliquam aliquam efficitur suscipit. In accumsan risus consequat ullamcorper volutpat. Fusce nec consequat tortor, ac lacinia sapien. Duis vehicula sapien eget mi tincidunt, nec placerat mi tincidunt. Ut condimentum ultrices eros quis malesuada. In eget venenatis eros. In nec condimentum urna, eu scelerisque felis. Vestibulum aliquet, tellus in convallis consectetur, nibh sapien aliquam felis, eu dignissim sapien nisi nec ligula. In hac habitasse platea dictumst. Pellentesque sit amet purus ut nibh molestie lobortis. Vestibulum et euismod leo, nec rhoncus massa. Duis augue est, blandit et ultricies eu, elementum tempor arcu.
        </p>
        <p>
          Donec aliquam consectetur lacus nec semper. Nam ornare dignissim leo, ut rutrum mauris maximus in. Nulla turpis dui, faucibus sed mattis ac, pharetra a justo. Donec consectetur purus ut dictum venenatis. Donec sed est a leo eleifend interdum nec id purus. Pellentesque a porttitor nisl, at dictum ligula. Sed vitae est ultrices, elementum est in, fringilla augue. In hac habitasse platea dictumst. Fusce eleifend ac arcu a vulputate. Morbi sollicitudin, est ac blandit rhoncus, risus massa imperdiet lorem, non porta felis risus at arcu. Ut sed arcu sed eros dapibus fringilla. Sed mollis velit magna, accumsan rutrum nisi gravida et. Integer sed pretium erat, et finibus massa. Sed sit amet eleifend est, quis ultricies ante. Nulla volutpat dui nec velit mattis interdum.
        </p>
      </div>
    </div>
</template>

<style lang="scss">
.about-page {
  text-align: center;
  &__content {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    p:not(:last-child){
      margin-bottom: 25px;
    }
  }

}
</style>
