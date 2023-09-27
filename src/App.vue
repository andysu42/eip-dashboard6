<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, MapPinIcon, ArrowSmallRightIcon } from '@heroicons/vue/24/outline'

const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div data-theme="dark" class="layout">
    <Disclosure as="nav" class="bg-primary rounded-xl" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company" /> -->
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- <button type="button"
              class="relative rounded-full bg-base-200 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> -->
            <!-- <span class="absolute -inset-1.5" /> -->
            <!-- <span class="sr-only">View notifications</span> -->
            <!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
            <a href="" class="">
              <div class="indicator">
                <span class="indicator-item badge badge-secondary">17</span>
                <div class="grid bg-base-300 place-items-center rounded-full">
                  <BellIcon class="h-[34px] w-[34px]" aria-hidden="true" />
                </div>
              </div>
            </a>
            <!-- </button> -->

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-6">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                  <a href="#" class="font-bold"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">我的帳號</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">帳號管理</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">密碼管理</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <aside class="sidebar fixed block">
      <ul>
        <li>
          <a href="">

          </a>
        </li>
        <li>
          <a href="">

          </a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </aside>
    <main class="relative h-full max-h-screen">
      <div class="w-full p-6 mx-auto">
        <div class="flex xs:flex-wrap md:flex-nowrap gap-4">
          <div class="flex-shrink-0 xxs:w-full md:w-7/12">
            <div class="card card-side bg-base-200 shadow-xl">
              <!-- <figure>
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure> -->
              <div
                class="card-btn h-auto flex items-center justify-center w-2/5 m-4 rounded-lg cursor-pointer bg-primary">
                <p class="text-[24px] text-primary-content">上班！</p>
              </div>
              <div class="card-body p-[12px]">
                <h2 class="card-title">今日打卡狀態</h2>
                <div class="flex flex-col items-start">
                  <div class="flex items-center justify-between w-full">
                    <p class="font-medium">上班</p>
                    <div class="tooltip" data-tip="25.080987758688497, 121.57508767657981">
                      <MapPinIcon class="h-6 w-6 text-success cursor-pointer" />
                    </div>
                  </div>
                  <div class="flex items-center w-full">
                    <p class="font-medium text-primary">2023-09-25 09:00:00</p>
                  </div>
                  <div class="divider my-0"></div>
                  <div class="flex items-center justify-between w-full">
                    <p class="font-medium">下班</p>
                    <div class="tooltip" data-tip="25.080987758688497, 121.57508767657981">
                      <MapPinIcon class="h-6 w-6 text-error cursor-pointer" />
                    </div>
                  </div>
                  <div class="flex items-center w-full">
                    <p class="font-medium text-primary">2023-09-25 09:00:00</p>
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-sm">查看更多</button>
                </div>
              </div>
            </div>
          </div>
          <div class="xs:w-full w-7/12">
            <div class="card card-side bg-base-200 shadow-xl">
              <div class="card-body p-[12px]">
                <h2 class="card-title">今日工作進度</h2>
                <div class="flex flex-col items-start max-h-[180px] overflow-scroll">
                  <ul class="flex flex-col">
                    <li>
                      <span>EIP 規劃 <small>xxxxx</small></span>
                      <div class="max-w-[200px]">
                        <progress class="progress progress-info w-[240px]" value="100" max="100"></progress>
                      </div>
                    </li>
                    <div class="divider my-0"></div>
                    <li>
                      <span>EIP 開發 <small>xxxxx</small></span>
                      <div class="max-w-[200px]">
                        <progress class="progress progress-info w-[240px]" value="40" max="100"></progress>
                      </div>
                    </li>
                    <div class="divider my-0"></div>
                    <li>
                      <span>EIP 測試 <small>xxxxx</small></span>
                      <div class="max-w-[200px]">
                        <progress class="progress progress-info w-[240px]" value="70" max="100"></progress>
                      </div>
                    </li>
                    <div class="divider my-0"></div>
                    <li>
                      <span>其他工作 <small>xxxxx</small></span>
                      <div class="max-w-[200px]">
                        <progress class="progress progress-info w-[240px]" value="70" max="100"></progress>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-sm">查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex xxs:flex-col md:flex-row items-center mt-[20px] gap-4">
          <div class="xxs:w-full md:w-1/2 rounded-lg">
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body p-[12px]">
                <h2 class="card-title mr-2">請假</h2>
                <div class="max-h-[200px] overflow-scroll">
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                        <div class="badge badge-info">簽核中</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <a class="flex flex-wrap cursor-pointer" @click="toggleModal">
                        <div class="badge text-accent text-[14px] mr-2">特休假</div>
                        <div class="text-[14px] mr-2">2023/09/27 09:00 ～ 2023/09/27 18:00</div>
                        <div class="text-[14px]">時數: 8</div>
                      </a>
                      <div class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': showModal }">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">假單檢視</h3>
                          <div class="divider my-0"></div>
                          <p class="py-4">審核狀態</p>
                          <ul class="steps xxs:steps-vertical md:steps-horizontal w-full">
                            <li data-content="✓" class="step step-success">
                              <div class="flex md:flex-col items-center gap-2">
                                產品部 - 主任
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                            <li data-content="✓" class="step step-success">
                              <div class="flex md:flex-col items-center gap-2">
                                營運處 - 處長
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                            <li data-content="" class="step">
                              <div class="flex md:flex-col items-center gap-2">
                                執行長
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                          </ul>
                          <div class="modal-action">
                            <button class="btn btn-sm" @click="toggleModal">
                              關閉
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">銷假</div>
                        <div class="badge badge-secondary mr-2">取消</div>
                        <div class="badge badge-error">已退回</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                        <div class="badge badge-success">已核准</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                        <div class="badge badge-success">已核准</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-primary">查看更多</button>
                </div>
              </div>
            </div>
          </div>
          <div class="xxs:w-full md:w-1/2 rounded-lg">
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body p-[12px]">
                <h2 class="card-title mr-2">簽核</h2>
                <div class="max-h-[200px] overflow-scroll">
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <a class="flex flex-wrap cursor-pointer" @click="toggleModal">
                        <div class="text-[14px] mr-2">某某某</div>
                        <div class="badge text-accent text-[14px] mr-2">特休假</div>
                        <div class="text-[14px] mr-2">2023/09/27 09:00 ～ 2023/09/27 18:00</div>
                        <div class="text-[14px]">時數: 8</div>
                      </a>
                      <div class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': showModal }">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">假單檢視</h3>
                          <div class="divider my-0"></div>
                          <p class="py-4">審核狀態</p>
                          <ul class="steps xxs:steps-vertical md:steps-horizontal w-full">
                            <li data-content="✓" class="step step-success">
                              <div class="flex md:flex-col items-center gap-2">
                                產品部 - 主任
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                            <li data-content="✓" class="step step-success">
                              <div class="flex md:flex-col items-center gap-2">
                                營運處 - 處長
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                            <li data-content="" class="step">
                              <div class="flex md:flex-col items-center gap-2">
                                執行長
                                <small>2023/09/27 14:20:00</small>
                              </div>
                            </li>
                          </ul>
                          <div class="modal-action">
                            <div class="flex gap-2">
                              <div class="mr-4">
                                <button class="btn btn-outline btn-success btn-sm mr-2" @click="toggleModal">
                                  通過
                                </button>
                                <button class="btn btn-outline btn-error btn-sm" @click="toggleModal">
                                  退回
                                </button>
                              </div>
                              <div class="">
                                <button class="btn btn-sm" @click="toggleModal">
                                  關閉
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">銷假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-secondary mr-2">取消</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                  <details class="collapse collapse-arrow bg-base-100 mb-2">
                    <summary class="collapse-title text-xl font-medium">
                      <div class="flex items-center">
                        <div class="mr-2">請假</div>
                        <div class="badge badge-primary mr-2">申請</div>
                      </div>
                    </summary>
                    <div class="collapse-content">
                      <p>content</p>
                    </div>
                  </details>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-primary">查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex xxs:flex-col md:flex-row items-center mt-[20px] gap-4">
          <div class="xxs:w-full md:w-1/2 rounded-lg">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body p-[12px]">
                <h2 class="card-title">最新公告</h2>
                <div class="carousel carousel-center max-w-full p-2 space-x-4 bg-base-200 rounded-box">
                  <div class="carousel-item">
                    <div class="w-[200px] h-[200px] bg-base-300 rounded-lg p-4">
                      <div class="flex flex-col">
                        <div class="flex justify-between mb-2">
                          <div class="flex items-start gap-2">
                            <div class="avatar online">
                              <div class="w-[32px] rounded-full bg-primary"></div>
                            </div>
                            <div class="flex flex-col">
                              <p class="text-[14px] max-w-[100px] text-ellipsis break-all">辦公室消毒清潔</p>
                              <p class="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.</p>
                            </div>
                          </div>
                          <div class="flex">
                            <ArrowSmallRightIcon class="h-[16px] w-[16px] text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="w-[200px] h-[200px] bg-base-300 rounded-lg p-4">
                      <div class="flex flex-col">
                        <div class="flex justify-between mb-2">
                          <div class="flex items-start gap-2">
                            <div class="avatar online">
                              <div class="w-[32px] rounded-full bg-primary"></div>
                            </div>
                            <div class="flex flex-col">
                              <p class="text-[14px] max-w-[100px] text-ellipsis break-all">辦公室消毒清潔</p>
                              <p class="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.</p>
                            </div>
                          </div>
                          <div class="flex">
                            <ArrowSmallRightIcon class="h-[16px] w-[16px] text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="w-[200px] h-[200px] bg-base-300 rounded-lg p-4">
                      <div class="flex flex-col">
                        <div class="flex justify-between mb-2">
                          <div class="flex items-start gap-2">
                            <div class="avatar online">
                              <div class="w-[32px] rounded-full bg-primary"></div>
                            </div>
                            <div class="flex flex-col">
                              <p class="text-[14px] max-w-[100px] text-ellipsis break-all">辦公室消毒清潔</p>
                              <p class="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.</p>
                            </div>
                          </div>
                          <div class="flex">
                            <ArrowSmallRightIcon class="h-[16px] w-[16px] text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="w-[200px] h-[200px] bg-base-300 rounded-lg p-4">
                      <div class="flex flex-col">
                        <div class="flex justify-between mb-2">
                          <div class="flex items-start gap-2">
                            <div class="avatar online">
                              <div class="w-[32px] rounded-full bg-primary"></div>
                            </div>
                            <div class="flex flex-col">
                              <p class="text-[14px] max-w-[100px] text-ellipsis break-all">辦公室消毒清潔</p>
                              <p class="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.</p>
                            </div>
                          </div>
                          <div class="flex">
                            <ArrowSmallRightIcon class="h-[16px] w-[16px] text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-sm">查看更多</button>
                </div>
              </div>
            </div>
          </div>
          <div class="xs:w-full md:w-1/2">
            <div class="card card-side bg-base-100 shadow-xl">
              <div class="card-body p-[12px]">
                <h2 class="card-title">今日請假人員</h2>
                <div class="flex flex-col items-start max-h-[180px] overflow-scroll">
                  <ul class="flex flex-col w-full p-2">
                    <li class="flex xxs:flex-col lg:flex-row flex-wrap items-center gap-2">
                      <div class="avatar">
                        <div class="w-[36px] rounded-full ring ring-offset-base-100 ring-offset-2">
                          <img src="	https://ui.shadcn.com/avatars/01.png" />
                        </div>
                      </div>
                      <div class="badge">前端開發部</div>
                      <span>Bacon Su</span>
                      <div class="badge text-accent text-[14px] mr-2">特休假</div>
                      <span>代理人：Rkr Shen</span>
                    </li>
                    <div class="divider my-2"></div>
                    <li class="flex xxs:flex-col lg:flex-row flex-wrap items-center gap-2">
                      <div class="avatar">
                        <div class="w-[36px] rounded-full ring ring-offset-base-100 ring-offset-2">
                          <img src="	https://ui.shadcn.com/avatars/01.png" />
                        </div>
                      </div>
                      <div class="badge">前端開發部</div>
                      <span>Bacon Su</span>
                      <div class="badge text-accent text-[14px] mr-2">特休假</div>
                      <span>代理人：Rkr Shen</span>
                    </li>
                    <div class="divider my-2"></div>
                    <li class="flex xxs:flex-col lg:flex-row flex-wrap items-center gap-2">
                      <div class="avatar">
                        <div class="w-[36px] rounded-full ring ring-offset-base-100 ring-offset-2">
                          <img src="	https://ui.shadcn.com/avatars/01.png" />
                        </div>
                      </div>
                      <div class="badge">前端開發部</div>
                      <span>Bacon Su</span>
                      <div class="badge text-accent text-[14px] mr-2">特休假</div>
                      <span>代理人：Rkr Shen</span>
                    </li>
                    <div class="divider my-2"></div>
                    <li class="flex xxs:flex-col lg:flex-row flex-wrap items-center gap-2">
                      <div class="avatar">
                        <div class="w-[36px] rounded-full ring ring-offset-base-100 ring-offset-2">
                          <img src="	https://ui.shadcn.com/avatars/01.png" />
                        </div>
                      </div>
                      <div class="badge">前端開發部</div>
                      <span>Bacon Su</span>
                      <div class="badge text-accent text-[14px] mr-2">特休假</div>
                      <span>代理人：Rkr Shen</span>
                    </li>
                  </ul>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-sm">查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  overflow-y: auto;
  padding: 12px;
}

aside {
  max-width: 16rem;
  z-index: 99999;
}
</style>
