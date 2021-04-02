<template>
    <div class="h-100 overflow-hidden">
        <div class="container mb-4">
            <h4 class="mb-0">10 de Febrero <small><span class="badge badge-dark">Finalizado</span></small></h4>
            <span class="text-secondary">
                <small>
                    <NuxtLink to="/genres/techno" class="text-decoration-none text-secondary">Techno</NuxtLink> /
                    <NuxtLink to="/genres/tech-house" class="text-decoration-none text-secondary">Tech House</NuxtLink>
                </small> 
            </span>
        </div>

        <div class="container row mx-auto mb-4">
            <div class="col-md-7 px-0">
                <p class="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae 
                    reiciendis error ducimus nemo quam eaque minus vel accusamus similique! Sed 
                    quisquam perferendis earum suscipit id! Tempora incidunt veniam quae!
                </p>
            </div>
        </div>

        <div class="container row mx-auto">
            <div class="col-sm-6 px-0 mb-5 mb-sm-0">
                <div class="mb-2">
                    <h5 class="font-weight-bold d-inline-block">Line Up</h5>
                    <!-- <NuxtLink to="1/streams" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink> -->
                </div>

                <!-- <div class="d-flex flex-column mb-2">
                    <div class="d-flex align-items-center">
                        <div class="bg-dark px-3 py-2 rounded-circle">
                            <span>1</span>
                        </div>
                        <div class="d-flex flex-column ml-2">
                            <NuxtLink to="/artists/black-monkeys" class="text-light text-decoration-none">Black Monkeys</NuxtLink>
                            <small class="mb-0 text-secondary">19:00 - 20:00</small>
                        </div>
                    </div>
                </div> -->

                <div class="d-flex flex-column mb-2">
                    <div class="d-flex">
                        <div class="pr-2 border-right d-flex align-items-center border-dark">
                            <small>19:00</small>
                        </div>
                        <NuxtLink to="/artists/black-monkeys" class="d-flex flex-column text-decoration-none ml-2">
                            <span class="text-light">Black Monkeys</span>
                            <span class="text-secondary">Techno - Tech House</span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="d-flex flex-column mb-2">
                    <div class="d-flex">
                        <div class="pr-2 border-right d-flex align-items-center border-dark">
                            <small>20:00</small>
                        </div>
                        <NuxtLink to="/artists/black-monkeys" class="d-flex flex-column text-decoration-none ml-2">
                            <span class="text-light">M4 Hat</span>
                            <span class="text-secondary">Techno</span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="d-flex flex-column mb-2">
                    <div class="d-flex">
                        <div class="pr-2 border-right d-flex align-items-center border-dark">
                            <small>22:00</small>
                        </div>
                        <NuxtLink to="/artists/black-monkeys" class="d-flex flex-column text-decoration-none ml-2">
                            <span class="text-light">Dukker</span>
                            <span class="text-secondary">Techno</span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="d-flex flex-column mb-2">
                    <div class="d-flex">
                        <div class="pr-2 border-right d-flex align-items-center border-dark">
                            <small>00:00</small>
                        </div>
                        <NuxtLink to="/artists/black-monkeys" class="d-flex flex-column text-decoration-none ml-2">
                            <span class="text-light">Flug & Sebastian</span>
                            <span class="text-secondary">Techno</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 px-0">
                <div class="mb-2">
                    <h5 class="font-weight-bold d-inline-block">Streams</h5>
                    <!-- <NuxtLink to="1/streams" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink> -->
                </div>

                <div>
                    <p>AGREGAR</p>
                </div>
            </div>
        </div>
    </div>
</template>